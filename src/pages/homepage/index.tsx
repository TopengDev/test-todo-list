import { useEffect, useRef, useState } from "react"

const initTasks = [
   {
      title: "Cuci Mobil",
      desc: "jadwal cuci mobil mingguan",
      isDone: false,
   },
   {
      title: "Cuci Mobil",
      desc: "jadwal cuci mobil mingguan",
      isDone: false,
   },
   {
      title: "Cuci Mobil",
      desc: "jadwal cuci mobil mingguan",
      isDone: false,
   },
]

type TTask = {
   title: string
   desc: string
   isDone: boolean
}

const HomePage = () => {
   const [taskList, setTaskList] = useState<TTask[]>(initTasks)

   const handleToggle = (i: number) => {
      const tmpTasks: TTask[] = []

      taskList.map((task, j) => {
         j === i
            ? tmpTasks.push({ ...task, isDone: !task.isDone })
            : tmpTasks.push(task)
      })

      setTaskList(tmpTasks)
   }

   const titleRef = useRef<any>()
   const descRef = useRef<any>()

   const handleAdd = () => {
      setTaskList([
         ...taskList,
         {
            desc: descRef.current,
            title: titleRef.current,
            isDone: false,
         },
      ])
   }

   const handleDelete = (i: number) => {
      setTaskList(taskList.filter((task, j) => i != j))
   }

   return (
      <div className='w-[100vw] flex justify-center items-center h-[100vh]'>
         <div className=' h-[720px] flex-col flex gap-8 items-center bg-gray-200 p-4 justify-center'>
            <h1 className='text-[32px] font-bold'>Todo List</h1>
            <div className='flex flex-col justify-between items-center gap-4'>
               <div>
                  <h2 className='font-bold text-lg'>Add new task</h2>
                  <div className='flex gap-2'>
                     <input
                        type='text'
                        onChange={(e) => {
                           titleRef.current = e.target.value
                        }}
                        placeholder='Task Title'
                     />
                     <input
                        type='text'
                        onChange={(e) => {
                           descRef.current = e.target.value
                        }}
                        placeholder='Task Decsription'
                     />
                  </div>
               </div>
               <div>
                  <button
                     onClick={handleAdd}
                     className='px-4 py-2 bg-green-200 flex justify-center itms-center rounded-full'
                  >
                     Add new task
                  </button>
               </div>
            </div>
            <div>
               {taskList.map((task, i) => (
                  <>
                     <div className='flex items-center justify-between gap-2 bg-gray-300 rounded-2xl w-[560px] p-4 m-2'>
                        <div className='flex flex-col w-full '>
                           <h1 className='text-gray-700 font-bold text-xl '>
                              {task.title}
                           </h1>
                           <h1 className='text-gray-700  text-base'>
                              {task.desc}
                           </h1>
                        </div>
                        <div className='flex gap-2'>
                           {/* <input type='checkbox' className='w-4 h-4' /> */}
                           <div
                              className='px-4 py-2 flex justify-center items-center bg-lime-200 w-32 rounded-lg hover:cursor-pointer'
                              onClick={() => handleToggle(i)}
                           >
                              {task.isDone ? "DONE" : "On Progress"}
                           </div>

                           <div
                              className='px-4 py-2 flex justify-center items-center bg-red-200 w-32 rounded-lg hover:cursor-pointer'
                              onClick={() => handleDelete(i)}
                           >
                              Delete
                           </div>
                        </div>
                     </div>
                  </>
               ))}
            </div>
         </div>
      </div>
   )
}

export default HomePage
