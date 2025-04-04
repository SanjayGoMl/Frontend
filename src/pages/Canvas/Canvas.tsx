import { AiQueries } from './components/AIQueries';
import axios from 'axios';
import { Button, LoadingProfile } from '@/components'
import { IMessage, UserType } from '@/utils/types'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useState, useRef, useEffect } from 'react'
import ReactTimeAgo from 'react-time-ago'
import { Chat } from './components/Chat/Chat';
import logo from '../../assets/goml.png'

export const Canvas = () => {
  const [chats, setChats] = useState<IMessage[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  
  const chatRef = useRef<HTMLDivElement>(null)
  //@ts-ignore
  const [inputMessage, setInputMessage] = useState<string>('') 
  const [aiQueries, setAiQueries] = useState<string[]>([]); 
  

  const bot = {
    id: '032d2e68-cecc-4041-9863-1f533e6cf5b4',
    created_at: '2023-12-30T16:19:40.044337+00:00',
    name: 'Saksoft Bot',
    knowledge_id: 'Db_b6a90314f1c54f6a90bbd99faa28bca1',
    user: '18ab37ab-07ba-4d88-ac08-b6c40d694bcb',
    type: 'CHAT',
    welcome_message: 'Hi there, get started by sending your query.',
    model: 'gpt-3.5-turbo-16k',
    temperature: 0.4,
    top_p: 0.4,
    company_slug: null,
    left_color: '#555555',
    right_color: '#DBCC95',
    logo: logo,
   }

  const scrollToBottom = () => chatRef?.current?.scrollIntoView({ behavior: 'smooth' });

  const appendMessage = (role: string = UserType.user, msg: any, name: string = 'You', title?: string) => {
    setChats((prev) => [...prev, { role, content: msg, name, title }]);
    scrollToBottom();
  };

  const sendMessage = (message: string) => {
    // setLoading(true);
    appendMessage(UserType.user, message);
    console.log('use message to call api', message);
    setAiQueries(prevQueries => [message, ...prevQueries]);
    FunctionClick(message); // Call FunctionClick with the input message
    // setLoading(false);
  };


    
  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault();
  //     sendMessage(inputMessage); // Call sendMessage function when Enter is pressed
  //   }
  // };
    const onQuery = (query: string) => () => {
      setInputMessage(query);
    };
    const clearChat = async () => {
      setChats([]);
      // Display initial assistant message after clearing chat
      await setTimeout(() => {
        appendMessage(UserType.assistant, 'Hello, how can I assist you today?');
      }, 2000);
    };
    const FunctionClick = async (message: string) => {
      setLoading(true);
      console.log(message);
    
      try {
        const apiUrl = import.meta.env.VITE_API_URL
    
        const requestBody = {
          question: message,
          analysis_type: "sql"
        };
    
        const responseApi = await axios.post(`${apiUrl}/chat`, requestBody, {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
        });
    
        // Handle the response as needed
        console.log(responseApi.data);
    
        if (responseApi.status === 200) {
          const responseData = responseApi.data;
          
          if (responseData.answer) {
            const transformedAnswer = responseData.answer.split('\n').map((point: string, index: number) => (
              <p key={index} style={{ fontSize: '14px', textAlign: 'justify' }}>{point}</p>
            ));
            appendMessage(UserType.assistant, transformedAnswer, 'Saksoft Bot');
          }
    
        } else {
          console.error('API request failed:', responseApi.status, responseApi.statusText);
          appendMessage(UserType.assistant, `Oops! Something went wrong. Error: ${responseApi.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching assistant response:', error);
        appendMessage(UserType.assistant, 'Oops! Something went wrong. Please try again.');
      } finally {
        setLoading(false);
        scrollToBottom();
      }
    };

  useEffect(() => {
    appendMessage(UserType.assistant, 'Hello, how can I assist you today?')

    return () => {
      // Empty the chat before leaving
    }
  }, [])
  return (
    <div className="flex h-[85vh] w-full space-x-4 mb-1"> {/* Added mb-4 for margin-bottom */}
      <div className="flex flex-col bg-white dark:bg-slate-800 h-full w-full rounded-md p-3 drop-shadow-xl">
        <div className="flex w-full justify-end">
          <Button variant="ghost" startIcon={<TrashIcon className="w-4 h-4" />} onClick={clearChat}>
            Clear Chat
          </Button>
        </div>
        <div className="overflow-y-auto scroll-smooth" style={{ maxHeight: 'calc(85vh - 4rem)' }}>
          {bot?.name &&
            chats.map((conv, idx: number) => {
              return (
                <div key={idx} className="group flex my-4 items-center">
                  <div className="mr-2 flex-shrink-0 w-10 h-10 flex justify-center items-center">
                    {conv.role !== 'user' ? (
                      <div
                        className="border border-slate-200 rounded-full"
                        style={{
                          backgroundImage: `url("${bot?.logo}")`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '35px auto',
                          overflow: 'hidden',
                          width: 40,
                          height: 40,
                        }}
                      />
                    ) : (
                      <UserCircleIcon className="dark:text-slate-300" />
                    )}
                  </div>
                  <div className="" style={{ animationDelay: `0.${idx}s` }}>
                    <span className="flex items-center">
                      <h4 className="text-sm font-bold text-gray-600 dark:text-slate-200">
                      {conv.role !== 'user' ? (conv.title ? conv.title: "Saksoft Bot") : 'You'}
                      </h4>
                      <p className="text-xs font-regular text-gray-500 dark:text-slate-400 ml-2">
                        <ReactTimeAgo date={new Date()} />
                      </p>
                    </span>
                    <p className="mt-1 text-sm p-2 max-w-xl bg-slate-100 text-slate-800 rounded-lg dark:bg-slate-300 dark:text-slate-700">
                      {conv.content}
                    </p>
                  </div>
                </div>
              )
            })}
          {loading && <LoadingProfile logo={bot.logo} name={bot?.name} />}
          <div ref={chatRef} ></div>
          
          {/* <div ref={chatRef} style={{ float: 'left', clear: 'both' }}></div> */}
        </div>
        
       </div> 
       {/* <div className="ml-20 mt-8"> */}
            <Chat onMessageSend={sendMessage} />
          {/* </div> */}
          <div className="flex flex-col w-2/5 p-4 space-y-4 rounded-md bg-white dark:bg-slate-800 shadow-xl" style={{ overflowY: 'auto'}}>
        {/* To store the queries in this column linearly */}
        <AiQueries onQuery={onQuery} aiQueries={aiQueries} />
      </div>
    </div>
  )
}  

