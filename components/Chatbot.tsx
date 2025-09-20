import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { useTranslation } from '../hooks/useTranslation';

const API_KEY = process.env.API_KEY;
const ai = API_KEY ? new GoogleGenAI({apiKey: API_KEY}) : null;

// Icons
const ChatIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> );
const SendIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> );
const BotIcon = () => ( <div className="text-sm font-bold leading-none text-emerald-400">A</div> );


interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatbotProps {
  systemInstruction: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ systemInstruction }) => {
  const { t } = useTranslation();
  const STARTER_QUESTIONS = [
    t('chatbot.starterQuestions.q1'),
    t('chatbot.starterQuestions.q2'),
    t('chatbot.starterQuestions.q3'),
    t('chatbot.starterQuestions.q4'),
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const savedMessages = localStorage.getItem('chatHistory');
      return savedMessages ? JSON.parse(savedMessages) : [];
    } catch (error) {
      return [];
    }
  });
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    } catch (error) {
      console.error("Could not save chat history to localStorage", error);
    }
  }, [messages]);

  useEffect(() => {
    if (!ai) {
        console.warn("AI features disabled: API key not available.");
        return;
    }
    if (isOpen) {
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction },
      });
      setChat(newChat);
      if (messages.length === 0) {
        setMessages([{ role: 'model', text: t('chatbot.initialMessage') }]);
      }
    }
  }, [isOpen, systemInstruction, t]); // `messages.length` removed to avoid re-initializing chat

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);
  
  const handleSendMessage = async (messageText: string) => {
    if (isLoading || !messageText.trim() || !chat) return;

    const text = messageText.trim();
    setUserInput('');
    setIsLoading(true);

    const userMessage: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMessage, { role: 'model', text: '' }]);

    try {
        // Re-create the chat with history for correct context
        const chatWithHistory = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: { systemInstruction },
            history: messages.map(msg => ({ role: msg.role, parts: [{ text: msg.text }] })),
        });

        const result = await chatWithHistory.sendMessageStream({ message: text });
        
        let responseText = '';
        for await (const chunk of result) {
            responseText += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = responseText;
                return newMessages;
            });
        }
    } catch (error) {
        console.error("Chatbot error:", error);
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = t('chatbot.error');
            return newMessages;
        });
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    const openHandler = (event: Event) => {
        setIsOpen(true);
        const customEvent = event as CustomEvent<string>;
        if (typeof customEvent.detail === 'string' && customEvent.detail) {
            // Need to wait for chat to be initialized if it's not already
            setTimeout(() => handleSendMessage(customEvent.detail), 100);
        }
    };
    window.addEventListener('open-chatbot', openHandler);
    return () => window.removeEventListener('open-chatbot', openHandler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // `handleSendMessage` is now stable due to useCallback/useRef, but let's keep this simple.

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(userInput);
  };
  
  const handleStarterClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      <button type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full btn-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-emerald-500/30"
        aria-label={t('chatbot.open')}
      >
        <ChatIcon />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-md h-[70vh] max-h-[600px] flex flex-col animate-slide-in-up">
            <div className="p-px bg-gradient-to-br from-emerald-500/30 via-zinc-800/0 to-zinc-800/0 rounded-2xl h-full shadow-2xl">
                <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-[15px] text-white flex flex-col h-full overflow-hidden">
                    {/* Header */}
                    <header className="flex items-center justify-between p-4 border-b border-zinc-800 flex-shrink-0">
                        <h2 className="text-lg font-bold">{t('chatbot.title')}</h2>
                        <button type="button" onClick={() => setIsOpen(false)} className="p-2 rounded-full text-zinc-400 hover:bg-zinc-800 transition-colors" aria-label={t('chatbot.close')}>
                            <CloseIcon />
                        </button>
                    </header>

                    {/* Messages */}
                    <div className="flex-grow p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-2 animate-fade-in-message ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700"><BotIcon/></div>}
                                <div className={`max-w-xs md:max-w-sm px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-br-none' : 'bg-zinc-700 rounded-bl-none'}`}>
                                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                                </div>
                            </div>
                        ))}
                        {isLoading && messages[messages.length - 1]?.role === 'model' && messages[messages.length - 1]?.text === '' && (
                             <div className="flex items-end gap-2 justify-start animate-fade-in-message">
                                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700"><BotIcon/></div>
                                 <div className="px-4 py-3 rounded-2xl bg-zinc-700 rounded-bl-none">
                                    <div className="typing-indicator">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Starter Questions */}
                    {messages.length <= 1 && !isLoading && (
                        <div className="p-4 border-t border-zinc-800 flex-shrink-0">
                            <p className="text-xs text-zinc-400 mb-2">{t('chatbot.starterHint')}</p>
                            <div className="flex flex-wrap gap-2">
                                {STARTER_QUESTIONS.map(q => (
                                    <button type="button" key={q} onClick={() => handleStarterClick(q)} className="text-sm bg-zinc-800/70 border border-zinc-700 hover:bg-zinc-700/80 hover:border-emerald-500/50 px-3 py-1.5 rounded-full transition-all duration-200">{q}</button>
                                ))}
                            </div>
                        </div>
                    )}


                    {/* Input */}
                    <div className="p-4 border-t border-zinc-800 flex-shrink-0 bg-zinc-900/50">
                        <form onSubmit={handleSubmit} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder={t('chatbot.inputPlaceholder')}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                                disabled={isLoading || !ai}
                            />
                            <button type="submit" disabled={isLoading || !userInput.trim() || !ai} className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 disabled:bg-zinc-600 disabled:cursor-not-allowed transition-colors">
                                <SendIcon />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
