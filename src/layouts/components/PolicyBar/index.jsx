import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faRotate,
  faThumbsUp,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const policies = [
  {
    icon: faTruck,
    title: "GIAO HÀNG TẬN NƠI",
    desc: "Miễn phí giao hàng nội thành",
  },
  {
    icon: faRotate,
    title: "ĐỔI TRẢ DỄ DÀNG",
    desc: "Miễn phí đổi trong 10 ngày",
  },
  {
    icon: faThumbsUp,
    title: "HÀNG CHÍNH HÃNG",
    desc: "Cam kết hàng chính hãng 100%",
  },
  {
    icon: faDollarSign,
    title: "NHẬN HÀNG TRẢ TIỀN",
    desc: "Tiền mặt, quẹt thẻ, chuyển khoản",
  },
];

function PolicyBar() {
  return (
    <section className="bg-[#1f1f1f] py-[30px] text-white border-t-2 border-[#333333]">
      <div className="container mx-auto px-[15px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-y-[30px] lg:gap-y-[20px]">
          {policies.map((item, index) => (
            <div key={index} className="flex items-center gap-[15px]">
              {/* Đã đổi màu icon từ xanh lá (#54b22c) sang xanh biển (#007bff) */}
              <div className="text-[32px] text-[#007bff] flex items-center justify-center w-[40px]">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold m-0 mb-[5px] uppercase">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#cccccc] m-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PolicyBar;
