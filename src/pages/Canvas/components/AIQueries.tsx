import React from 'react';
import { BoltIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/20/solid'; // Adjust path as per your project structure

type IAiQueries = {
  onQuery: (message: string) => () => void;
  aiQueries: string[]; // Add aiQueries as a prop
};

export const AiQueries: React.FC<IAiQueries> = ({ onQuery, aiQueries }) => {
  return (
    <div className="space-y-2 h-[90%] overflow-y-auto no-scrollbar">
      {aiQueries?.length === 0 && (
        <div className="border-2 border-dashed h-full flex flex-col justify-center items-center text-slate-500">
          <ArchiveBoxXMarkIcon className="w-5 h-5" />
          No recent actions performed.
        </div>
      )}
      {aiQueries.map((query, index) => ( // Map over aiQueries
        <div
          key={index}
          onClick={onQuery(query)}
          className="flex flex-col p-2 rounded-md text-md shadow-sm bg-blue-100 cursor-pointer"
        >
          <div className="flex items-center font-medium">
            <BoltIcon className={'mr-2 w-5 h-5 fill-yellow-600'} />
            {query}
          </div>
          <p className="py-2 text-sm text-slate-600">{query}</p>
        </div>
      ))}
    </div>
  );
};

// return (
//   // <div className="flex flex-col h-screen">
//   // <div className="flex flex-1">
//     <div className="flex h-[60rem] w-full space-x-4 mb-4 overflow-hidden relative">
//       {/* Chat Area */}
//       <div className="flex flex-col bg-white dark:bg-slate-800 h-full w-full rounded-md p-3 drop-shadow-xl">
//         <div className="flex w-full justify-end">
//           <Button variant="ghost" startIcon={<TrashIcon className="w-4 h-4" />}>
//             Clear Chat
//           </Button>
//         </div>
//         <div className="overflow-y-auto scroll-smooth no-scrollbar">
//           {/* Chat messages */}
//           {bot?.name &&
//             chats.map((conv, idx: number) => {
//               return (
//                 <div key={idx} className="group flex my-4 items-center">
//                   {/* Avatar */}
//                   <div className="mr-2 flex-shrink-0 w-10 h-10 flex justify-center items-center">
//                     {conv.role !== 'user' ? (
//                       <div
//                         className="border border-slate-200 rounded-full"
//                         style={{
//                           backgroundImage: `url("${bot?.logo}")`,
//                           backgroundPosition: 'center',
//                           backgroundRepeat: 'no-repeat',
//                           backgroundSize: '35px auto',
//                           overflow: 'hidden',
//                           width: 40,
//                           height: 40,
//                         }}
//                       />
//                     ) : (
//                       <UserCircleIcon className="dark:text-slate-300" />
//                     )}
//                   </div>
//                   {/* Message content */}
//                   <div className="" style={{ animationDelay: `0.${idx}s` }}>
//                     <span className="flex items-center">
//                       <h4 className="text-sm font-bold text-gray-600 dark:text-slate-200">
//                         {conv.role !== 'user' ? (conv.title ? conv.title : " Bot") : 'You'}
//                       </h4>
//                       <p className="text-xs font-regular text-gray-500 dark:text-slate-400 ml-2">
//                         <ReactTimeAgo date={new Date()} />
//                       </p>
//                     </span>
//                     <p className="mt-1 text-sm p-2 max-w-xl bg-slate-100 text-slate-800 rounded-lg dark:bg-slate-300 dark:text-slate-700">
//                       {conv.content}
//                     </p>
//                   </div>
//                 </div>
//               )
//             })}
//           {loading && <LoadingProfile logo={bot.logo} name={bot?.name} />}
//           <div ref={chatRef} style={{ float: 'left', clear: 'both' }}></div>
//           <div ref={chatRef} style={{ float: 'left', clear: 'both' }}></div>
//         </div>
//       </div>
//     {/* </div>
//   </div> */}

//   {/* Chat Input Area (Fixed at the bottom) */}
//   <div className="flex mb-1 p-4 fixed bottom-0 left-0 w-full bg-white dark:bg-slate-800">
//     <Input
//       placeholder="Type your message..."
//       value={inputMessage}
//       onChange={(e: ChangeEvent<HTMLInputElement>) =>
//         setInputMessage(e.target.value)
//       }
//       onKeyDown={handleKeyDown}
//       className="flex-1 mr-2"
//     />
//     <Button onClick={sendMessage}>Send</Button>
//   </div>

//   {/* Response Area */}
//   <div className="flex flex-col w-2/5 p-4 space-y-4 rounded-md bg-white dark:bg-slate-800 shadow-xl">
//     {/* To store the queries in this column linearly */}
//     <AiQueries onQuery={onQuery} aiQueries={aiQueries} />
//   </div>
// </div>
// )
// }  

