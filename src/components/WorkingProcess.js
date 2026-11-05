import React, { useEffect } from "react";
import AOS from "aos";

const steps = [
  {
    number: 1,
    title: "Gửi yêu cầu",
    desc: "Cung cấp thông tin sản phẩm, file in",
  },
  {
    number: 2,
    title: "Báo giá",
    desc: "Nhận báo giá nhanh, minh bạch",
  },
  {
    number: 3,
    title: "Duyệt file",
    desc: "Kiểm tra & duyệt file trước khi in",
  },
  {
    number: 4,
    title: "In & QC",
    desc: "In ấn & kiểm tra chất lượng nghiệp ngặt",
  },
  {
    number: 5,
    title: "Giao hàng",
    desc: "Đóng gói & giao hàng đúng hẹn",
  },
];

function WorkingProcess() {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <section className="working-process py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="working-process__item p-8 bg-white rounded-2xl shadow-sm border border-gray-100 text-center h-full flex flex-col items-center"
              data-aos="fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="working-process__number w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg shadow-red-500/30 flex-shrink-0">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-[#1E1E1E] mb-2 leading-tight flex-grow">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-shrink-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
