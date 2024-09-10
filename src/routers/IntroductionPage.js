import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import NavSidebar from "../components/NaviSidebar";
import BlogSidebar from "../components/BlogSidebar";
import HeadingSection from "../components/HeadingSection";

function IntroductionPage() {
  const icons = `<svg class="w-6 h-6 text-emerald-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
    </svg>`;

  const listTerms = [
    "Sử dụng kỹ thuật in hiện đại",
    "Sản phẩm in ấn đảm bảo chất lượng về mặt hình thức",
    "Bản in sử dụng chất liệu đảm bảo có độ bền cao",
    "Giá dịch vụ cạnh tranh",
    "Giảm giá khi in số lượng lớn",
    "Giao hàng đúng theo thỏa thuận",
    "Không phát sinh chi phí trong quá trình in ấn",
  ];

  const tags = [
    {
      title: "In decal PP,",
      link: "/danh-muc-in/in-decal-pp",
    },
    {
      title: "In lụa - canavs",
      link: "/danh-muc-in/in-lua-canvas",
    },
    {
      title: "In băng rôn,",
      link: "/danh-muc-in/in-bang-ron",
    },
    {
      title: "In decal ôtô,",
      link: "/danh-muc-in/in-decal-o-to",
    },
    {
      title: "In backlit,",
      link: "/danh-muc-in/in-backlit",
    },
    {
      title: "In bạt hifex",
      link: "/danh-muc-in/in-bat-hiflex",
    },
  ];
  const socials = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/Inmau-112848952386864/",
      icon: (
        <svg
          class="w-6 h-6 text-blue-700 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Twitter",
      link: "https://www.facebook.com/Inmau-112848952386864/",
      icon: (
        <svg
          class="w-6 h-6 text-cyan-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Instagram",
      link: "https://www.facebook.com/Inmau-112848952386864/",
      icon: (
        <svg
          class="w-6 h-6 text-rose-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Github",
      link: "https://www.facebook.com/Inmau-112848952386864/",
      icon: (
        <svg
          class="w-6 h-6 text-neutral-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Linked In",
      link: "https://www.facebook.com/Inmau-112848952386864/",
      icon: (
        <svg
          class="w-6 h-6 text-sky-600 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
            clipRule="evenodd"
          />
          <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="introduction-page pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="row flex-col-reverse lg:flex-wrap lg:flex-row">
          <div
            className="col relative"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40 pt-4 md:pt-6 lg:pt-0">
              <div className="introduction-page__item">
                <NavSidebar />
              </div>
              <div className="introduction-page__item pt-8">
                <BlogSidebar />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            <div className="introduction-page__heading">
              <HeadingSection title="Giới thiệu chung" icon={icons} />
            </div>
            <div className="introduction-page__content pt-4">
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                In Hoàng Gia – Thế giới in ấn đa sắc màu, sáng tạo với chất
                lượng đạt chuẩn
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-4">
                Quý doanh nghiệp đang tìm kiếm một đơn vị cung cấp dịch vụ in ấn
                chuyên nghiệp và đề cao chất lượng? Công ty TNHH thương mại và
                dịch vụ In Hoàng Gia là sự gợi ý không thể tuyệt vời hơn. Với
                kinh nghiệm nhiều năm trong lĩnh vực in ấn, đội ngũ nhân viên có
                kinh nghiệm, thiết bị hiện đại,… In Hoàng Gia luôn tự tin mang
                đến dịch vụ in ấn đa sắc màu, sáng tạo và chất lượng đạt chuẩn.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Đôi nét về công ty TNHH TM&DV In Hoàng Gia
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Được thành lập năm 2016, Công ty TNHH TM&DV In Hoàng Gia là một
                trong những cây “đại thụ” trong lĩnh vực in ấn. Trải qua gần 10
                năm hoạt động In Hoàng Gia đã khẳng định vị thế và sự chuyên
                nghiệp của mình trong lĩnh vực in ấn tại Hà Nội. Minh chứng quan
                trọng và rõ ràng nhất chính là lượng khách hàng đồng hành với
                công ty tăng lên mỗi ngày.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Trong nhiều năm qua Công ty TNHH TM&DV In Hoàng Gia không ngừng
                cố gắng nỗ, lực mang đến dịch in ấn chất lượng nhất. Đứng trước
                sự cạnh tranh gay gắt của thị trường in ấn Hà Nội, nhưng In
                Hoàng Gia chưa bao giờ hoang mang. Thay vào đó công ty vẫn luôn
                hoạt động theo sứ mệnh, nhiệm vụ và mục tiêu đã đề ra.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-4">
                Đến với In Hoàng Gia quý doanh nghiệp sẽ được trải nghiệm dịch
                vụ in ấn chuyên nghiệp, giá cả cạnh tranh. Cùng với đó, In Hoàng
                Gia luôn đưa ra những lời cam kết vàng trong dịch vụ. Vì vậy quý
                doanh nghiệp hoàn toàn có thể đặt niềm tin tuyệt đối vào Nguyên
                Bảo.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Sứ mệnh – Mục tiêu – Phương châm hoạt động
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Ngay từ ngày đầu thành lập In Hoàng Gia đã xác định rõ ràng, sứ
                mệnh mục tiêu và phương phâm hoạt động của công ty. Trong mọi
                hoạt động, In Hoàng Gia luôn lấy sứ mệnh – mục tiêu – phương
                châm hoạt động làm kim chỉ nam. Nhờ đó, dịch vụ in ấn của công
                ty luôn mang đến sự hài lòng cho quý khách hàng, bao gồm cả
                những vị khách khó tính nhất.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                <span className="italic text-emeralb-600">Sứ mệnh:</span>
                Ngay từ ngày đầu thành lập In Hoàng Gia đã xác định rõ ràng, sứ
                mệnh mục tiêu và phương phâm hoạt động của công ty. Trong mọi
                hoạt động, In Hoàng Gia luôn lấy sứ mệnh – mục tiêu – phương
                châm hoạt động làm kim chỉ nam. Nhờ đó, dịch vụ in ấn của công
                ty luôn mang đến sự hài lòng cho quý khách hàng, bao gồm cả
                những vị khách khó tính nhất.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                <span className="italic text-emeralb-600">Mục tiêu:</span>
                Trong mọi quá trình cung cấp dịch vụ, In Hoàng Gia đã đề ra mục
                tiêu nâng cao chất lượng dịch vụ in ấn, đưa ra mức giá thành tốt
                nhất. Đặc biệt, trong tương lai, In Hoàng Gia sẽ mở rộng quy mô
                hoạt động. Bằng việc mang dịch in ấn chất lượng đến tay khách
                hàng khắp cả nước với nhiều cơ sở và chi nhánh
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                <span className="italic text-emeralb-600">
                  Phương châm hoạt động:{" "}
                </span>
                “Mang chất lượng vào dịch vụ – Khách hàng là chìa khóa thành
                công” là phương châm hoạt động của In Hoàng Gia ngay từ ban đầu.
                Hay nói cách khác dễ hiểu hơn, bên cạnh nỗ lực mang đến dịch vụ
                in ấn đạt chuẩn chất lượng, In Hoàng Gia luôn lấy nhu cầu và
                nguyện vọng của khách hàng làm nền tảng hoạt động.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Không phải nghiễm nhiên mà In Hoàng Gia có thể mang đến dịch vụ
                in ấn đạt chuẩn chất lượng. Để làm nên sự thành công và chất
                lượng dịch vụ in ấn, In Hoàng Gia luôn tự hào bởi sự đồng hành
                của đội ngũ nhân lực tiềm năng.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Tại In Hoàng Gia quy tụ đội ngũ nhân viết thiết kế có trình độ,
                giàu kinh nghiệm và luôn tận tâm với nghề. Trong mỗi bản thiết
                kế nhân viên của In Hoàng Gia luôn cố gắng tìm tòi, sáng tạo để
                mang đến những sản phẩm đẹp mắt, ấn tượng và độc đáo.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Chưa dừng lại ở đó, Công ty TNHH TM&DV In Hoàng Gia sở hữu thợ
                in giàu kinh nghiệm và lành nghề. Nhờ đó, quy trình in ấn đảm
                bảo đúng kỹ thuật, bản in sắc nét, độ tương phản cao. Đặc biệt,
                thợ in luôn làm việc một cách nghiêm túc, chuyên nghiệp đảm bảo
                sản phẩm in ấn chất lượng được giao đúng hạn.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Trang thiết bị hiện đại, thường xuyên cập nhật kỹ thuật mới
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Trang thiết bị máy móc hiện đại là một trong những yếu tố làm
                nên sản phẩm in ấn đạt chuẩn chất lượng. Nắm bắt được điều đó In
                Hoàng Gia không “ngại” bỏ ra một số tiền lớn để thay thế máy in
                “đời cổ” bằng những sản phẩm mới.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Song song với việc đầu tư cơ sở vật chất In Hoàng Gia không quên
                việc update kỹ thuật in hiện đại. Đến với dịch vụ in ấn của In
                Hoàng Gia chúng tôi quý khách hàng sẽ được trải nghiệm kỹ thuật
                in mới nhất cho hình ảnh sắc nét, đồng màu. Đặc biệt, quý khách
                hàng có thể in số lượng lớn lấy ngay.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Quy trình in ấn tại công ty TNHH TM&DV In Hoàng Gia
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Đề cao tính chuyên nghiệp trong dịch vụ in ấn, In Hoàng Gia đưa
                ra quy trình in ấn nhanh chóng, rút ngắn thời gian. Nhưng về mặt
                về mặt chất lượng thì luôn được đảm bảo.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Bước 1: Tiếp nhận thông tin khách hàng. Tư vấn khách hàng về kỹ
                thuật, chất liệu in ấn phù hợp và tiết kiệm chi phí nhất
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Bước 2: Thiết kế sản phẩm theo nhu cầu khách hàng. Trong trường
                hợp bản thiết kế không phù hợp như mong muốn của khách hàng, In
                Hoàng Gia sẽ chỉnh sửa.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Bước 3. In mẫu cho khách hàng
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Bước 4: Tiến hành in hàng loạt theo số lượng yêu cầu
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Bước 5: Giảo bản in và thanh toán chi phí in ấn
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Trang thiết bị hiện đại, thường xuyên cập nhật kỹ thuật mới
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Để khẳng định chất lượng dịch vụ in ấn, cũng như cảm ơn khách
                hàng đã đồng hành cùng Công ty TNHH TM&DV In Hoàng Gia, chúng
                tôi xin cam kết:
              </p>
              <ul className="introduction-page__list list-disc ms-8">
                {listTerms.map((item, index) => (
                  <li
                    className="introduction-page__item pb-1 last:pb-0 text-base text-gray-500"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="introduction-page__paragraph text-base text-gray-500 py-2">
                Với thế mạnh về nhiều mặt, Công ty TNHH TM&DV In Hoàng Gia cam
                kết mang đến dịch vụ in ấn hài lòng cho quý khách hàng. Vì vậy
                quý doanh nghiệp còn chờ đợi gì nữa, hãy liên hệ ngay hôm nay
                với In Hoàng Gia để trải nghiệm dịch vụ in ấn đa sắc màu, sáng
                tạo và đạt chuẩn chất lượng.
              </p>
            </div>
            <div className="introduction-page__bottom pt-4 border-t">
              <div className="introduction-page__tag">
                <h4 className="introduction-page__tag-title text-lg text-emerald-700 uppercase">
                  Danh mục liên quan
                </h4>
                <ul className="introduction-page__tag-list py-2 flex flex-wrap items-start lg:flex-nowrap lg:items-center gap-2">
                  <div className="text-base text-gray-700">Tags:</div>
                  {tags.map((tag, index) => (
                    <li className="introduction-page__tag-item" key={index}>
                      <Link
                        to={tag.link}
                        className="introduction-page__tag-link text-emerald-700 transition duration-300 hover:underline"
                      >
                        {tag.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="introduction-page__share pt-3 flex items-center gap-1">
                {socials.map((item, index) => (
                  <div
                    className="introduction-page__icon p-2.5 bg-slate-100 transition duration-300 cursor-pointer hover:bg-slate-200"
                    key={index}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;
