

const Reservation = () => {
  return (
    <aside className=" mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow">
        <h2 className=" mb-5 text-2xl font-semibold">$200 per night</h2>
        <div className=" border mb-6 p-3 border-gray-300 rounded-xl">
            <label className=" block text-xs mb-2 font-bold">Guests</label>
            <select className=" w-full -ml-1 text-sm ">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>

            </select>
        </div>
        <div className=" w-full py-6 mb-6 text-center text-white bg-airbnb hover:bg-airbnbDark rounded-xl">Book</div>
        <div className=" mb-4 flex justify-between align-center">
            <p>$200 x 4 nights</p>
            <p>$800</p>

        </div>
        <div className=" mb-4 flex justify-between align-center">
            <p>Airbnb_clone fee</p>
            <p>$40</p>
        </div>
        <hr/>
        <div className=" mt-4 flex justify-between align-center font-bold">
            <p>Total</p>
            <p>$840</p>
        </div>
    </aside>
  )
}

export default Reservation
