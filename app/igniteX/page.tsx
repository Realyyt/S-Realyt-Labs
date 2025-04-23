// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

export default function Next12Page() {
  const [isThaiLanguage, setIsThaiLanguage] = useState(false);

  useEffect(() => {
    // Load TrekkSoft booking script
    const script = document.createElement("script");
    script.src = "https://bw.trekksoft.com/loader.js";
    script.async = true;
    script.setAttribute("data-owner", "trekksoft");
    script.setAttribute("data-type", "activity-booking");
    script.setAttribute("data-id", "336353");
    script.setAttribute("data-client-id", "BOOKIE-a0c86de444c5d0b98c160bb97");
    script.setAttribute(
      "data-token",
      "2f02f0c7af1427fbf7e52043d780dd563bc978d4252a0c3d"
    );

    const container = document.getElementById("booking-button-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Clean up script on unmount
      if (container && script) {
        container.removeChild(script);
      }
    };
  }, []);

  const toggleLanguage = () => {
    setIsThaiLanguage(!isThaiLanguage);
  };

  return (
    <main className="min-h-screen bg-white text-[#040423]">
      {/* Header */}
      <Navbar />

      {/* Language Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-[#EF400A] text-white py-2 px-4 rounded-full font-bold text-lg hover:bg-[#EF400A]/90 transition-colors"
        >
          {isThaiLanguage ? "EN" : "TH"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-[#040423] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {isThaiLanguage ? "Next12 ประเทศไทย" : "Next12 Thailand"}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            {isThaiLanguage
              ? "ห้องปฏิบัติการนวัตกรรมและการลงทุนระดับโลกที่ออกแบบมาเพื่อเร่งความสำเร็จของผู้ก่อการและนักลงทุนที่โดดเด่นโดยการเชื่อมต่อพวกเขาในสภาพแวดล้อมที่มีประสิทธิภาพสูง"
              : "A world-class innovation and investment lab designed to accelerate the success of exceptional founders and investors by connecting them in powerful, high-impact environments."}
          </p>
          {/* Booking Button */}
          <div
            id="booking-button-container"
            className="bg-[#EF400A] text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-[#EF400A]/90 transition-colors cursor-pointer inline-block"
          ></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {isThaiLanguage ? "แนะนำ Next12" : "Introduction to Next12"}
            </h2>
            <div className="w-24 h-1 bg-[#EF400A] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {isThaiLanguage ? "ภารกิจของเรา" : "Our Mission"}
              </h3>
              <p className="text-[#898989] mb-6">
                {isThaiLanguage
                  ? "Next12 เป็นห้องปฏิบัติการนวัตกรรมและการลงทุนระดับโลกที่ออกแบบมาเพื่อเร่งความสำเร็จของผู้ก่อการและนักลงทุนที่โดดเด่นโดยการเชื่อมต่อพวกเขาในสภาพแวดล้อมที่มีประสิทธิภาพสูง"
                  : "Next12 is a world-class innovation and investment lab designed to accelerate the success of exceptional founders and investors by connecting them in powerful, high-impact environments."}
              </p>
              <p className="text-[#898989] mb-6">
                {isThaiLanguage
                  ? "โปรแกรมของเรามุ่งเน้นที่การเชื่อมโยงนวัตกรรมและการลงทุนโดยการนำผู้ก่อการที่มีวิสัยทัศน์ นักลงทุนระดับสูง และผู้นำธุรกิจระดับโลกมารวมกัน ด้วยประสบการณ์ที่คัดสรรในสถานที่ต่าง ๆ Next12 ออกแบบมาเพื่อปลดล็อกโอกาสที่เปลี่ยนแปลงเกม"
                  : "Our program focuses on bridging innovation and investment by bringing together visionary founders, top-tier investors, and global business leaders. With curated experiences in different locations, Next12 is designed to unlock game-changing opportunities."}
              </p>
              <p className="text-[#898989]">
                {isThaiLanguage
                  ? "Next12 กำลังจะมาถึงประเทศไทย และเรากำลังจัดโปรแกรมที่ทรงพลังสองโปรแกรม:"
                  : "Next12 is coming to Thailand, and we are hosting two powerful programs:"}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#040423] text-white p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "Next12 IgniteX" : "Next12 IgniteX"}
                </h4>
                <p>
                  {isThaiLanguage
                    ? "การประชุมระดับสูงสำหรับนักลงทุนที่ออกแบบมาเพื่อจับคู่นักลงทุนระดับสูงกับผู้ก่อการที่ล้ำสมัย"
                    : "A high-level investor-focused retreat designed to match top investors with cutting-edge founders."}
                </p>
              </div>
              <div className="bg-[#EF400A] text-white p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "Next12 Ignite" : "Next12 Ignite"}
                </h4>
                <p>
                  {isThaiLanguage
                    ? "ห้องปฏิบัติการสร้างสรรค์ 12 วันสำหรับผู้ก่อการเพื่อสร้างไอเดีย ขยายขนาด เชื่อมต่อ และระดมทุน"
                    : "An immersive 12-day builder's lab for founders to ideate, scale, connect, and raise capital."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IgniteX Section */}
      <section id="ignitex" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {isThaiLanguage ? "Next12 IgniteX" : "Next12 IgniteX"}
            </h2>
            <p className="text-xl text-[#898989] max-w-3xl mx-auto">
              {isThaiLanguage ? "ประสบการณ์ Next12 ที่พิเศษสุด" : "Exclusive Next12 Experience"}
            </p>
            <div className="w-24 h-1 bg-[#EF400A] mx-auto mt-4"></div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              {isThaiLanguage ? "IgniteX คืออะไร?" : "What is IgniteX?"}
            </h3>
            <p className="text-[#898989] mb-6">
              {isThaiLanguage
                ? "Next12 IgniteX เป็นงานที่มีประสิทธิภาพสูงและพิเศษสุดที่รวมแก่นแท้ของ Next12 ไว้ในวันเดียว ออกแบบมาสำหรับนักลงทุนและผู้ก่อการ IgniteX ทำหน้าที่เป็นแพลตฟอร์มสำหรับ:"
                : "Next12 IgniteX is an exclusive, high-impact event that encapsulates the essence of Next12 into a single day. Designed for investors and founders, IgniteX serves as a platform for:"}
            </p>
            <ul className="list-disc pl-6 text-[#898989] mb-6 space-y-2">
              <li>
                {isThaiLanguage
                  ? "การสร้างเครือข่ายระหว่างผู้ก่อการและนักลงทุนทั้งในและต่างประเทศ"
                  : "Networking among local and international founders and investors"}
              </li>
              <li>
                {isThaiLanguage
                  ? "การระดมสมองไอเดียและกลยุทธ์การลงทุนที่สร้างสรรค์"
                  : "Brainstorming innovative ideas and investment strategies"}
              </li>
              <li>
                {isThaiLanguage
                  ? "การสาธิตโซลูชันและโมเดลธุรกิจที่ล้ำสมัย"
                  : "Demonstrating cutting-edge solutions and business models"}
              </li>
              <li>
                {isThaiLanguage
                  ? "รูปแบบที่มีโครงสร้างและมุ่งเน้นผลลัพธ์ที่นำไปสู่การทำข้อตกลงจริง"
                  : "A structured, result-oriented format that leads to real deal-making"}
              </li>
            </ul>
            <p className="text-[#898989]">
              {isThaiLanguage
                ? "การประชุมนี้ช่วยอำนวยความสะดวกในการสร้างความสัมพันธ์และความร่วมมือที่มีความหมาย ซึ่งเป็นพื้นฐานสำหรับการมีส่วนร่วมในอนาคต"
                : "This retreat facilitates meaningful connections and collaborations, setting the stage for future engagements."}
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              {isThaiLanguage ? "IgniteX สำหรับใคร?" : "Who is it for?"}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#040423] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "นักลงทุน" : "Investors"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "กำลังมองหาโอกาสการลงทุนโดยตรงและความร่วมมือกับสตาร์ทอัพที่มีศักยภาพสูงในประเทศไทยและเอเชียตะวันออกเฉียงใต้"
                    : "Seeking direct investment opportunities and partnership with high-potential startups in Thailand and Southeast Asia."}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "ผู้ก่อการ" : "Founders"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "ต้องการแสดงผลงานของพวกเขาและเชื่อมต่อกับผู้สนับสนุนที่สามารถขับเคลื่อนการเติบโตและขยายตัวของพวกเขา"
                    : "Looking to showcase their ventures and connect with potential backers who can fuel their growth and expansion."}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              {isThaiLanguage ? "ประสบการณ์ IgniteX" : "The IgniteX Experience"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#040423] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "เซสชันการสร้างเครือข่ายพิเศษ" : "Exclusive Networking Sessions"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "มีส่วนร่วมในการปฏิสัมพันธ์คุณภาพสูงกับผู้นำในอุตสาหกรรมและผู้ตัดสินใจในสภาพแวดล้อมที่ใกล้ชิด"
                    : "Engage in high-quality interactions with industry leaders and decision-makers in an intimate setting."}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "การสนทนาแบบ Fireside" : "Fireside Chats"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "รับข้อมูลเชิงลึกที่มีค่าจากนักลงทุนที่มีประสบการณ์และผู้ประกอบการที่ประสบความสำเร็จ"
                    : "Gain invaluable insights from seasoned investors and successful entrepreneurs."}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#040423] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "การสนทนาแบบ Roundtable" : "Roundtable Discussions"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "ร่วมมือในกลยุทธ์การลงทุนและแนวโน้มตลาดกับมุมมองที่หลากหลาย"
                    : "Collaborate on investment strategies and market trends with diverse perspectives."}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "ประสบการณ์ทางวัฒนธรรม" : "Cultural Experiences"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "สัมผัสมรดกอันรุ่มรวยของประเทศไทยในขณะที่สร้างความสัมพันธ์ทางธุรกิจที่แข็งแกร่ง"
                    : "Experience Thailand's rich heritage while forging strong business relationships."}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              {isThaiLanguage ? "ประโยชน์สำหรับนักลงทุนและพันธมิตร" : "Benefits for Investors & Partners"}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        {isThaiLanguage ? "การเข้าถึงการไหลของข้อตกลงที่คัดสรร" : "Access to Curated Deal Flow"}
                      </h4>
                      <p className="text-[#898989]">
                        {isThaiLanguage
                          ? "มีส่วนร่วมกับสตาร์ทอัพที่พร้อมสำหรับการลงทุนที่ได้รับการคัดสรรอย่างรอบคอบ"
                          : "Engage with investment-ready startups that have been carefully selected."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        {isThaiLanguage ? "โอกาสในการสร้างเครือข่าย" : "Networking Opportunities"}
                      </h4>
                      <p className="text-[#898989]">
                        {isThaiLanguage
                          ? "เชื่อมต่อกับนักลงทุนระดับสูงและผู้เชี่ยวชาญในอุตสาหกรรม"
                          : "Connect with top-tier investors and industry experts."}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        {isThaiLanguage ? "ข้อมูลเชิงลึกเกี่ยวกับตลาด" : "Market Insight"}
                      </h4>
                      <p className="text-[#898989]">
                        {isThaiLanguage
                          ? "สำรวจอุตสาหกรรมที่เติบโตสูงและตลาดเกิดใหม่ด้วยคำแนะนำจากผู้เชี่ยวชาญ"
                          : "Explore high-growth industries and emerging markets with expert guidance."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        {isThaiLanguage ? "ประสบการณ์ระดับพรีเมียม" : "Premium Experience"}
                      </h4>
                      <p className="text-[#898989]">
                        {isThaiLanguage
                          ? "เพลิดเพลินกับกิจกรรมที่มีโครงสร้างดีและมีการสัมผัสสูงที่ออกแบบมาเพื่อการมีส่วนร่วมที่เหมาะสมที่สุด"
                          : "Enjoy a well-structured, high-touch event designed for optimal engagement."}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Why Thailand?</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-[#898989] mb-6">
                {isThaiLanguage
                  ? "ประเทศไทยกำลังก้าวขึ้นมาเป็นศูนย์กลางสตาร์ทอัพที่มีชีวิตชีวา ซึ่งเป็นพื้นที่อุดมสมบูรณ์สำหรับนวัตกรรมและการลงทุน"
                  : "Thailand is rapidly emerging as a vibrant startup hub, offering a fertile ground for innovation and investment."}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    {isThaiLanguage ? "เศรษฐกิจดิจิทัลที่เติบโตอย่างรวดเร็ว" : "Booming Digital Economy"}
                  </h4>
                  <p className="text-[#898989] mb-4">
                    {isThaiLanguage
                      ? "คาดว่าจะเติบโตถึง 33 พันล้านดอลลาร์ภายในปี 2025 โดยขับเคลื่อนด้วยความก้าวหน้าในด้านฟินเทค อีคอมเมิร์ซ และปัญญาประดิษฐ์"
                      : "Projected to reach $33 billion by 2025, driven by advancements in fintech, e-commerce, and artificial intelligence."}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    {isThaiLanguage ? "การสนับสนุนจากรัฐบาล" : "Government Support"}
                  </h4>
                  <p className="text-[#898989] mb-4">
                    {isThaiLanguage
                      ? "โครงการต่าง ๆ เช่น โครงการ SMART Visa ดึงดูดผู้เชี่ยวชาญที่มีทักษะสูงและนักลงทุน สร้างสภาพแวดล้อมที่เอื้ออำนวยต่อสตาร์ทอัพ"
                      : "Initiatives like the SMART Visa program attract highly skilled professionals and investors, fostering a conducive environment for startups."}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">
                    {isThaiLanguage ? "ตำแหน่งที่ตั้งเชิงกลยุทธ์" : "Strategic Location"}
                  </h4>
                  <p className="text-[#898989] mb-4">
                    {isThaiLanguage
                      ? "ทำหน้าที่เป็นประตูสู่เอเชียตะวันออกเฉียงใต้ ประเทศไทยให้การเข้าถึงตลาดที่มีประชากรมากกว่า 600 ล้านคน"
                      : "Serving as a gateway to Southeast Asia, Thailand offers access to a market of over 600 million people."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              {isThaiLanguage ? "IgniteX ประเทศไทย" : "IgniteX Thailand"}
            </h3>
            <p className="text-[#898989] mb-8 text-xl">
              {isThaiLanguage ? "วันที่เสนอ: 30 พฤษภาคม 2025" : "Proposed Date: May 30th, 2025"}
            </p>
          </div>
        </div>
      </section>

      {/* Ignite Section */}
      <section id="ignite" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {isThaiLanguage ? "Next12 Ignite" : "Next12 Ignite"}
            </h2>
            <p className="text-xl text-[#898989] max-w-3xl mx-auto">
              {isThaiLanguage ? "ห้องปฏิบัติการสร้างสรรค์" : "The Builders Lab"}
            </p>
            <div className="w-24 h-1 bg-[#EF400A] mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {isThaiLanguage ? "Ignite คืออะไร?" : "What is Ignite?"}
              </h3>
              <p className="text-[#898989] mb-6">
                {isThaiLanguage
                  ? "Next12 Ignite เป็นห้องปฏิบัติการสร้างสรรค์ 12 วันที่ออกแบบมาสำหรับ:"
                  : "Next12 Ignite is a 12-day immersive lab designed for:"}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#898989]">
                    {isThaiLanguage
                      ? "ผู้ก่อการและทีมสตาร์ทอัพที่ต้องการเร่งความเร็วของธุรกิจ"
                      : "Founders & Startup Teams seeking to accelerate their ventures."}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#898989]">
                    {isThaiLanguage
                      ? "ผู้สร้างเทคโนโลยีและผลิตภัณฑ์ที่มุ่งมั่นในการสร้างสรรค์และขยายโซลูชัน"
                      : "Tech & Product Builders aiming to innovate and scale solutions."}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#898989]">
                    {isThaiLanguage
                      ? "นักสร้างสรรค์และผู้สร้างนวัตกรรมที่ต้องการสร้างผลกระทบที่สำคัญ"
                      : "Innovators & Creators looking to make a significant impact."}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#EF400A] text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#898989]">
                    {isThaiLanguage
                      ? "ผู้นำธุรกิจ/สตาร์ทอัพและผู้บริหารที่สนใจในการอยู่ข้างหน้าแนวโน้มอุตสาหกรรม"
                      : "Business/Startup Leaders and Executives interested in staying ahead of industry trends."}
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {isThaiLanguage ? "Ignite สำหรับใคร?" : "Who is it for?"}
              </h3>
              <div className="space-y-6">
                <div className="bg-[#040423] text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">
                    {isThaiLanguage ? "สตาร์ทอัพระยะเริ่มต้น" : "Early-stage Startups"}
                  </h4>
                  <p>
                    {isThaiLanguage
                      ? "พร้อมที่จะขยายขนาดและนำธุรกิจของพวกเขาไปสู่ระดับต่อไป"
                      : "Ready to scale and take their business to the next level."}
                  </p>
                </div>
                <div className="bg-[#EF400A] text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">
                    {isThaiLanguage ? "บริษัทที่จัดตั้งแล้ว" : "Established Companies"}
                  </h4>
                  <p>
                    {isThaiLanguage
                      ? "กำลังมองหานวัตกรรมและมุมมองใหม่ ๆ"
                      : "Seeking innovation and fresh perspectives."}
                  </p>
                </div>
                <div className="bg-[#898989] text-white p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">
                    {isThaiLanguage ? "ผู้ประกอบการ" : "Entrepreneurs"}
                  </h4>
                  <p>
                    {isThaiLanguage
                      ? "ที่มีวิสัยทัศน์สำหรับการเปลี่ยนแปลงและผลกระทบ"
                      : "With a vision for change and impact."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {isThaiLanguage ? "ประสบการณ์ Ignite" : "The Ignite Experience"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#040423] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "เวิร์กช็อปเชิงปฏิบัติการ" : "Hands-on Workshops"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "มุ่งเน้นที่การพัฒนาผลิตภัณฑ์ กลยุทธ์ธุรกิจ และการเจาะตลาด"
                    : "Focused on product development, business strategy, and growth hacking."}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "เซสชันการให้คำปรึกษา" : "Mentorship Sessions"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "คำแนะนำแบบตัวต่อตัวจากผู้เชี่ยวชาญในอุตสาหกรรมและผู้ประกอบการที่ประสบความสำเร็จ"
                    : "One-on-one guidance from industry experts and successful entrepreneurs."}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#040423] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "การอภิปรายของนักลงทุน" : "Investor Panels"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "การเข้าถึงโอกาสการระดมทุนโดยตรงและข้อมูลเชิงลึกเกี่ยวกับการลงทุน"
                    : "Direct access to potential funding opportunities and investment insights."}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#EF400A] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {isThaiLanguage ? "วันสาธิต" : "Demo Day"}
                </h4>
                <p className="text-[#898989]">
                  {isThaiLanguage
                    ? "แสดงความก้าวหน้าของคุณต่อผู้ชมที่คัดสรรของนักลงทุนและพันธมิตร"
                    : "Showcase your progress to a curated audience of investors and partners."}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-[#898989] mb-8 text-xl">
              {isThaiLanguage ? "Next12 Ignite ประเทศไทย: วันที่เสนอ: สิงหาคม 2025" : "Next12 Ignite Thailand: Proposed Date: August 2025"}
            </p>
            <a href="/Ignite" className="bg-[#EF400A] text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-[#EF400A]/90 transition-colors inline-block">
              {isThaiLanguage ? "แสดงความสนใจ" : "Express Interest"}
            </a>
          </div>
        </div>
      </section>

      {/* Global Vision Section */}
      <section id="global" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {isThaiLanguage ? "วิสัยทัศน์ระดับโลกและการขยายตัว" : "Global Vision & Expansion"}
            </h2>
            <div className="w-24 h-1 bg-[#EF400A] mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#898989] text-lg mb-8">
              {isThaiLanguage
                ? "เรามีเป้าหมายที่จะเปิดตัว Next12 Ignite ในอย่างน้อย 150 ประเทศในทศวรรษหน้า ส่งผลกระทบต่อสตาร์ทอัพหลายพันแห่งทั่วโลก"
                : "We aim to launch Next12 Ignite in at least 150 countries over the next decade, impacting thousands of startups worldwide."}
            </p>
            
            <h3 className="text-2xl font-bold mb-6">
              {isThaiLanguage ? "เป้าหมายการขยายตัวในปี 2025" : "2025 Expansion Targets"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {isThaiLanguage ? "สิงคโปร์" : "Singapore"}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {isThaiLanguage ? "อินโดนีเซีย" : "Indonesia"}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {isThaiLanguage ? "ลิทัวเนีย" : "Lithuania"}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {isThaiLanguage ? "อินเดีย" : "India"}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {isThaiLanguage ? "ไนจีเรีย" : "Nigeria"}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {isThaiLanguage ? "มลาซีย์" : "Malaysia"}
              </div>
            </div>
            
            <p className="text-[#898989] mt-8">
              {isThaiLanguage
                ? "หลังจากปี 2025: เราจะขยาย Next12 Ignite ไปยังทุกทวีป เมืองละครั้ง"
                : "Beyond 2025: We will expand Next12 Ignite to every continent, one city at a time."}
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[#040423] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isThaiLanguage ? "วิธีมีส่วนร่วม" : "How to Get Involved"}
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            {isThaiLanguage
              ? "ต้องการเป็นส่วนหนึ่งของขบวนการนี้หรือไม่? นี่คือโอกาสบางส่วน:"
              : "Want to be a part of the movement? Here are some opportunities:"}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">
                {isThaiLanguage ? "พันธมิตรนักลงทุน" : "Investor Partnerships"}
              </h3>
              <p>
                {isThaiLanguage
                  ? "ลงทุนในสตาร์ทอัพที่เติบโตสูงผ่าน Next12 Ignite"
                  : "Invest in high-growth startups through Next12 Ignite."}
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">
                {isThaiLanguage ? "ร่วมเป็นเจ้าภาพในเมืองของคุณ" : "Co-Hosting in Your City"}
              </h3>
              <p>
                {isThaiLanguage
                  ? "นำ Next12 Ignite มาสู่ระบบนิเวศสตาร์ทอัพของคุณ"
                  : "Bring Next12 Ignite to your startup ecosystem."}
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">
                {isThaiLanguage ? "การแนะนำสตาร์ทอัพ" : "Startup Referrals"}
              </h3>
              <p>
                {isThaiLanguage
                  ? "แนะนำผู้ก่อการที่มีศักยภาพสูงให้เข้าร่วมโปรแกรมของเรา"
                  : "Introduce high-potential founders to join our program."}
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">
                {isThaiLanguage ? "คำเชิญในการพูด" : "Speaking Invitations"}
              </h3>
              <p>
                {isThaiLanguage
                  ? "เชิญเราไปพูดในงานของคุณเพื่อแบ่งปันข้อมูลเชิงลึกเกี่ยวกับการสร้างสตาร์ทอัพ"
                  : "Invite us to your events to share insights on startup building."}
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">
                {isThaiLanguage ? "การสนับสนุนจากองค์กร" : "Corporate Sponsorship"}
              </h3>
              <p>
                {isThaiLanguage
                  ? "วางตำแหน่งแบรนด์ของคุณที่แนวหน้าของนวัตกรรมระดับโลก"
                  : "Position your brand at the forefront of global innovation."}
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#EF400A]">
                {isThaiLanguage ? "การให้คำปรึกษาและที่ปรึกษา" : "Mentorship & Advisory"}
              </h3>
              <p>
                {isThaiLanguage
                  ? "แนะนำผู้ก่อการรุ่นต่อไปที่กำลังเปลี่ยนแปลงโลก"
                  : "Guide the next generation of world-changing founders."}
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-lg mb-8">
              {isThaiLanguage ? "มาสร้างอนาคตไปด้วยกัน!" : "Let's build the future, together!"}
            </p>
            <div className="max-w-md mx-auto bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#EF400A]">
                {isThaiLanguage ? "ติดต่อเรา" : "Contact Us"}
              </h3>
              <p className="mb-4">
                {isThaiLanguage ? "อีเมล: labs@next12.org" : "Email: labs@next12.org"}
              </p>
              <p className="mb-4">
                {isThaiLanguage ? "เว็บไซต์: www.next12.org" : "Website: www.next12.org"}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <p className="font-bold">
                    {isThaiLanguage ? "Salem Andero" : "Salem Andero"}
                  </p>
                  <p className="text-sm">
                    {isThaiLanguage ? "ผู้ร่วมก่อตั้ง, Next12" : "Co-pioneer, Next12"}
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    {isThaiLanguage ? "Emmanuel Isaac" : "Emmanuel Isaac"}
                  </p>
                  <p className="text-sm">
                    {isThaiLanguage ? "ผู้ร่วมก่อตั้ง, Next12" : "Co-pioneer, Next12"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer/>
    </main>
  );
}

