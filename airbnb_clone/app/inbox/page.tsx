import Conversation from "../components/inbox/Conversation"


const Inboxpage = () => {
  return (
  <main className=" max-w-[1500px] mx-auto pb-6 px-6 space-y-4">
    <h1 className=" text-2xl my-6">Inbox</h1>
    <Conversation/>
    <Conversation/>
    <Conversation/>
  </main>
  )
}

export default Inboxpage
