import React from "react";

//COMPONENTS
import NavSidebar from "../components/NaviSidebar";
import BlogSidebar from "../components/BlogSidebar";
import HeadingSection from "../components/HeadingSection";
import Tag from "../components/Tag";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

function IntroductionPage() {
  useDocumentTitle("Giới thiệu - Công ty In ấn Hoàng Gia");

  const icons = `<svg class="w-6 h-6 text-emerald-700 dark:text-emerald-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
                In ấn Hoàng Gia – Thế giới in ấn đa sắc màu, sáng tạo với chất
                lượng đạt chuẩn
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-4">
                Quý doanh nghiệp đang tìm kiếm một đơn vị cung cấp dịch vụ in ấn
                chuyên nghiệp và đề cao chất lượng? Công ty TNHH thương mại và
                dịch vụ In ấn Hoàng Gia là sự gợi ý không thể tuyệt vời hơn. Với
                kinh nghiệm nhiều năm trong lĩnh vực in ấn, đội ngũ nhân viên có
                kinh nghiệm, thiết bị hiện đại,… In ấn Hoàng Gia luôn tự tin
                mang đến dịch vụ in ấn đa sắc màu, sáng tạo và chất lượng đạt
                chuẩn.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Đôi nét về công ty In ấn Hoàng Gia
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Được thành lập năm 2016, Công ty In ấn Hoàng Gia là một trong
                những cây “đại thụ” trong lĩnh vực in ấn. Trải qua gần 10 năm
                hoạt động In ấn Hoàng Gia đã khẳng định vị thế và sự chuyên
                nghiệp của mình trong lĩnh vực in ấn tại Hà Nội. Minh chứng quan
                trọng và rõ ràng nhất chính là lượng khách hàng đồng hành với
                công ty tăng lên mỗi ngày.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Trong nhiều năm qua Công ty In ấn Hoàng Gia không ngừng cố gắng
                nỗ, lực mang đến dịch in ấn chất lượng nhất. Đứng trước sự cạnh
                tranh gay gắt của thị trường in ấn Hà Nội, nhưng In ấn Hoàng Gia
                chưa bao giờ hoang mang. Thay vào đó công ty vẫn luôn hoạt động
                theo sứ mệnh, nhiệm vụ và mục tiêu đã đề ra.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-4">
                Đến với In ấn Hoàng Gia quý doanh nghiệp sẽ được trải nghiệm
                dịch vụ in ấn chuyên nghiệp, giá cả cạnh tranh. Cùng với đó, In
                Hoàng Gia luôn đưa ra những lời cam kết vàng trong dịch vụ. Vì
                vậy quý doanh nghiệp hoàn toàn có thể đặt niềm tin tuyệt đối vào
                in Hoàng Gia.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Sứ mệnh – Mục tiêu – Phương châm hoạt động
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Ngay từ ngày đầu thành lập In ấn Hoàng Gia đã xác định rõ ràng,
                sứ mệnh mục tiêu và phương phâm hoạt động của công ty. Trong mọi
                hoạt động, In ấn Hoàng Gia luôn lấy sứ mệnh – mục tiêu – phương
                châm hoạt động làm kim chỉ nam. Nhờ đó, dịch vụ in ấn của công
                ty luôn mang đến sự hài lòng cho quý khách hàng, bao gồm cả
                những vị khách khó tính nhất.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                <span className="italic text-emeralb-600">Sứ mệnh:</span>
                Ngay từ ngày đầu thành lập In ấn Hoàng Gia đã xác định rõ ràng,
                sứ mệnh mục tiêu và phương phâm hoạt động của công ty. Trong mọi
                hoạt động, In ấn Hoàng Gia luôn lấy sứ mệnh – mục tiêu – phương
                châm hoạt động làm kim chỉ nam. Nhờ đó, dịch vụ in ấn của công
                ty luôn mang đến sự hài lòng cho quý khách hàng, bao gồm cả
                những vị khách khó tính nhất.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                <span className="italic text-emeralb-600">Mục tiêu:</span>
                Trong mọi quá trình cung cấp dịch vụ, In ấn Hoàng Gia đã đề ra
                mục tiêu nâng cao chất lượng dịch vụ in ấn, đưa ra mức giá thành
                tốt nhất. Đặc biệt, trong tương lai, In ấn Hoàng Gia sẽ mở rộng
                quy mô hoạt động. Bằng việc mang dịch in ấn chất lượng đến tay
                khách hàng khắp cả nước với nhiều cơ sở và chi nhánh
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                <span className="italic text-emeralb-600">
                  Phương châm hoạt động:{" "}
                </span>
                “Mang chất lượng vào dịch vụ – Khách hàng là chìa khóa thành
                công” là phương châm hoạt động của In ấn Hoàng Gia ngay từ ban
                đầu. Hay nói cách khác dễ hiểu hơn, bên cạnh nỗ lực mang đến
                dịch vụ in ấn đạt chuẩn chất lượng, In ấn Hoàng Gia luôn lấy nhu
                cầu và nguyện vọng của khách hàng làm nền tảng hoạt động.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Đội ngũ nhân viên chuyên nghiệp, giàu kinh nghiệm
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Không phải nghiễm nhiên mà In ấn Hoàng Gia có thể mang đến dịch
                vụ in ấn đạt chuẩn chất lượng. Để làm nên sự thành công và chất
                lượng dịch vụ in ấn, In ấn Hoàng Gia luôn tự hào bởi sự đồng
                hành của đội ngũ nhân lực tiềm năng.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Tại In ấn Hoàng Gia quy tụ đội ngũ nhân viết thiết kế có trình
                độ, giàu kinh nghiệm và luôn tận tâm với nghề. Trong mỗi bản
                thiết kế nhân viên của In ấn Hoàng Gia luôn cố gắng tìm tòi,
                sáng tạo để mang đến những sản phẩm đẹp mắt, ấn tượng và độc
                đáo.
              </p>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Chưa dừng lại ở đó, Công ty In ấn Hoàng Gia sở hữu thợ in giàu
                kinh nghiệm và lành nghề. Nhờ đó, quy trình in ấn đảm bảo đúng
                kỹ thuật, bản in sắc nét, độ tương phản cao. Đặc biệt, thợ in
                luôn làm việc một cách nghiêm túc, chuyên nghiệp đảm bảo sản
                phẩm in ấn chất lượng được giao đúng hạn.
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
                Song song với việc đầu tư cơ sở vật chất In ấn Hoàng Gia không
                quên việc update kỹ thuật in hiện đại. Đến với dịch vụ in ấn của
                In Hoàng Gia chúng tôi quý khách hàng sẽ được trải nghiệm kỹ
                thuật in mới nhất cho hình ảnh sắc nét, đồng màu. Đặc biệt, quý
                khách hàng có thể in số lượng lớn lấy ngay.
              </p>
              <h6 className="introduction-page__title text-lg text-emerald-700 py-2">
                Quy trình in ấn tại công ty In ấn Hoàng Gia
              </h6>
              <p className="introduction-page__paragraph text-base text-gray-500 pb-2">
                Đề cao tính chuyên nghiệp trong dịch vụ in ấn, In ấn Hoàng Gia
                đưa ra quy trình in ấn nhanh chóng, rút ngắn thời gian. Nhưng về
                mặt về mặt chất lượng thì luôn được đảm bảo.
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
                hàng đã đồng hành cùng Công ty In ấn Hoàng Gia, chúng tôi xin
                cam kết:
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
                Với thế mạnh về nhiều mặt, Công ty In ấn Hoàng Gia cam kết mang
                đến dịch vụ in ấn hài lòng cho quý khách hàng. Vì vậy quý doanh
                nghiệp còn chờ đợi gì nữa, hãy liên hệ ngay hôm nay với In Hoàng
                Gia để trải nghiệm dịch vụ in ấn đa sắc màu, sáng tạo và đạt
                chuẩn chất lượng.
              </p>
            </div>
            <div className="introduction-page__bottom pt-4 border-t">
              <Tag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;
