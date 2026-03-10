import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import logo from "@/assets/logo/logo.png";
import bct from "@/assets/img/bct.png";

function Footer() {
  return (
    <footer className="bg-black text-white px-[40px] pt-[40px] pb-[20px] font-sans text-[13px] leading-[1.8]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] pb-[40px] border-b border-[#1a1a1a]">
        <div>
          <div className="flex items-center mb-[24px]">
            <img
              src={logo}
              alt="MacOne"
              className="h-[60px] w-auto object-contain"
            />
          </div>
          <p className="m-0 mb-[8px]">
            MACONE là đại lý uỷ quyền chính thức của Apple tại Việt Nam (AAR)
          </p>
          <p className="font-bold m-0 mb-[8px]">Công ty cổ phần MACONE</p>
          <p className="m-0 mb-[8px]">Giấy phép ĐKKD số: 0108037559</p>
          <p className="m-0 mb-[8px]">
            Hotline tư vấn:{" "}
            <span className="text-[#00a8ff] font-bold">0936 362 153</span>
          </p>
          <p className="m-0 mb-[8px]">
            Khách hàng Doanh nghiệp:{" "}
            <span className="text-[#00a8ff] font-bold">0936 368 455</span>
          </p>
          <p className="m-0 mb-[8px]">
            Sửa chữa & Bảo hành:{" "}
            <span className="text-[#00a8ff] font-bold">0936 363 501</span>
          </p>
          <p className="m-0 mb-[8px]">
            Thời gian làm việc: <span className="font-bold">8h30 – 21h30</span>
          </p>
          <p className="m-0 mb-[8px]">Email: lienhe@macone.vn</p>

          <p className="font-bold my-[20px] mb-[10px] m-0">MẠNG XÃ HỘI</p>
          <div className="flex gap-[12px]">
            <div className="w-[36px] h-[36px] bg-[#1a1a1a] rounded-[4px] flex items-center justify-center text-[18px] cursor-pointer transition-colors duration-200 hover:bg-[#333333]">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="w-[36px] h-[36px] bg-[#1a1a1a] rounded-[4px] flex items-center justify-center text-[18px] cursor-pointer transition-colors duration-200 hover:bg-[#333333]">
              <FontAwesomeIcon icon={faYoutube} color="#ff0000" />
            </div>
            <div className="w-[36px] h-[36px] bg-[#1a1a1a] rounded-[4px] flex items-center justify-center text-[18px] cursor-pointer transition-colors duration-200 hover:bg-[#333333]">
              <FontAwesomeIcon icon={faInstagram} color="#f56040" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] font-bold m-0 mb-[20px] uppercase">
            HỖ TRỢ KHÁCH HÀNG
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Giới thiệu",
              "Hướng dẫn mua hàng",
              "Bán hàng Doanh nghiệp",
              "Mua trả góp",
              "Tin công nghệ",
              "MFix – Trung tâm dịch vụ sửa chữa",
              "Liên hệ",
            ].map((text, idx) => (
              <li key={idx} className="mb-[12px]">
                <Link
                  to="/"
                  className="text-inherit no-underline transition-colors duration-200 hover:text-[#0088cc]"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <img
            src={bct}
            alt="Đã thông báo bộ công thương"
            className="w-[150px] mt-[20px]"
          />
        </div>

        <div>
          <h3 className="text-[16px] font-bold m-0 mb-[20px] uppercase">
            CHÍNH SÁCH
          </h3>
          <ul className="list-none p-0 m-0">
            {[
              "Chính sách Bảo Hành & Đổi Trả",
              "Chính sách đặt hàng",
              "Chính sách vận chuyển",
              "Chính sách bảo mật thông tin",
              "Chính sách thanh toán",
              "Gói bảo hành vàng MACONE Care",
              "Các gói bảo hành hỗ trợ doanh nghiệp",
            ].map((text, idx) => (
              <li key={idx} className="mb-[12px]">
                <Link
                  to="/"
                  className="text-inherit no-underline transition-colors duration-200 hover:text-[#0088cc]"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold m-0 mb-[8px]">Hà Nội:</p>
          <p className="m-0 mb-[8px]">
            <span className="font-bold">
              Cơ sở 1: 113 Hoàng Cầu, P. Đống Đa, HN.
            </span>{" "}
            SĐT: <span className="text-[#00a8ff] font-bold">0342 99 55 66</span>
          </p>
          <p className="m-0 mb-[8px]">
            <span className="font-bold">
              Cơ sở 2: 99 Nguyễn Văn Huyên, P. Nghĩa Đô, HN.
            </span>{" "}
            SĐT: <span className="text-[#00a8ff] font-bold">0773 220 666</span>
          </p>
          <p className="font-bold m-0 mb-[8px] mt-[16px]">TP Hồ Chí Minh:</p>
          <p className="m-0 mb-[8px]">
            <span className="font-bold">
              Cơ sở 3: 186 Võ Văn Tần, P. Bản Cờ, TP HCM.
            </span>{" "}
            SĐT: <span className="text-[#00a8ff] font-bold">0386 370 444</span>
          </p>
          <p className="m-0 mb-[8px]">
            <span className="font-bold">
              Cơ sở 4: 223 Xô Viết Nghệ Tĩnh, P. Gia Định, TP HCM.
            </span>{" "}
            SĐT: <span className="text-[#00a8ff] font-bold">0973 645 650</span>
          </p>
          <p className="italic text-[#cccccc] m-0 mb-[8px]">
            (Các cơ sở đều có chỗ để xe ô tô)
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[20px]">
        <div className="text-center text-[12px]">
          <p className="m-0 mb-[8px]">
            Sản phẩm tiêu biểu:
            {[
              "MacBook",
              "MacBook Air",
              "MacBook Pro",
              "iMac",
              "Mac Mini",
              "MacBook Pro M4",
              "iMac M4",
              "Mac mini M4",
              "Mfix.vn",
            ].map((text, idx, arr) => (
              <span key={idx}>
                <Link
                  to="/"
                  className="font-bold mx-[4px] text-inherit no-underline transition-colors duration-200 hover:text-[#0088cc]"
                >
                  {text}
                </Link>
                {idx < arr.length - 1 && " |"}
              </span>
            ))}
          </p>
          <p className="m-0 text-[#999999]">
            Copyright © 2026 - Bản quyền thuộc về MacOne.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
