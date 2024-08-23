import Image from "next/image"


const ProviderScreen = () => {
  return (
    <div className="h-screen bg-[#D9D9D9]">
      <div className="fixed top-0 left-0 bg-primary-500 flex items-center justify-end px-4 h-14 w-full text-white lg:h-16">
        <Image
          src="/images/icons/Close24px.png"
          alt="back-arrow"
          width={24}
          height={24}
        />
      </div>
      <section className="h-full pt-14 flex items-center justify-center font-bold">
        <h1>
          Payment Provider Screen
        </h1>
      </section>
    </div>
  )
}

export default ProviderScreen