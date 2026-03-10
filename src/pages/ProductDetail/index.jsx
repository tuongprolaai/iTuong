import { useState } from "react";
import { Link } from "react-router"; // Lưu ý: React Router v6 dùng react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChevronRight,
  faAngleLeft,
  faAngleRight,
  faInfoCircle,
  faCheckCircle,
  faShoppingCart,
  faPiggyBank,
  faLaptop,
  faBoxOpen,
  faTruckFast,
  faThumbsUp,
  faPhoneVolume,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";

// Placeholder ảnh, bạn thay bằng đường dẫn thực tế trong dự án nhé
import macbookImg from "../../assets/img/macneo.png"; 

function ProductDetail() {
  // --- STATES ---
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Space Black");
  const [selectedRam, setSelectedRam] = useState("24GB");
  const [selectedStorage, setSelectedStorage] = useState("1TB");
  const [isWarrantySelected, setIsWarrantySelected] = useState(false);
  
  // State quản lý việc mở rộng bảng thông số kỹ thuật
  const [isSpecsExpanded, setIsSpecsExpanded] = useState(false);

  // Dữ liệu mẫu
  const images = [macbookImg, macbookImg, macbookImg, macbookImg, macbookImg];
  const storages = [
    { capacity: "512GB SSD", price: "49.890.000 đ" },
    { capacity: "1TB SSD", price: "55.590.000 đ" },
    { capacity: "2TB SSD", price: "66.290.000 đ" },
    { capacity: "4TB SSD", price: "80.990.000 đ" },
  ];

  return (
    <div className="w-full bg-[#ebebeb] min-h-screen pt-[15px] pb-[50px] font-sans text-[#333]">
      <div className="container mx-auto px-4 bg-white p-6 rounded-[8px]">
        
        {/* --- BREADCRUMBS --- */}
        <div className="flex items-center gap-2 text-[13px] mb-[30px] text-gray-500">
          <Link to="/" className="flex items-center gap-1 hover:text-[#8cc63f]">
            <FontAwesomeIcon icon={faHouse} /> Trang chủ
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[9px]" />
          <Link to="/macbook" className="hover:text-[#8cc63f]">MacBook</Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[9px]" />
          <Link to="/macbook-pro" className="hover:text-[#8cc63f]">MacBook Pro</Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[9px]" />
          <Link to="/macbook-pro-m4" className="hover:text-[#8cc63f]">MacBook Pro M4</Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[9px]" />
          <span className="text-gray-800 font-medium">MacBook Pro M4 14 inch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ================= CỘT TRÁI ================= */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Gallery Ảnh */}
            <div className="relative bg-[#f5f5f7] rounded-[8px] flex items-center justify-center p-8 mb-4 h-[400px]">
              <button className="absolute left-2 w-8 h-8 flex items-center justify-center bg-gray-300/50 rounded hover:bg-gray-300 transition z-10">
                <FontAwesomeIcon icon={faAngleLeft} className="text-white" />
              </button>
              <img src={images[activeImage]} alt="MacBook" className="max-w-full max-h-full object-contain mix-blend-multiply" />
              <button className="absolute right-2 w-8 h-8 flex items-center justify-center bg-gray-300/50 rounded hover:bg-gray-300 transition z-10">
                <FontAwesomeIcon icon={faAngleRight} className="text-white" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white text-[11px] px-3 py-1 rounded">
                Space Black: Z1FE000CM
              </div>
            </div>

            <div className="flex items-center gap-2 mb-10">
              <button className="w-6 h-16 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                <FontAwesomeIcon icon={faAngleLeft} className="text-gray-500" />
              </button>
              <div className="flex flex-1 gap-2 overflow-hidden">
                {images.map((img, idx) => (
                  <div key={idx} onClick={() => setActiveImage(idx)} className={`w-[70px] h-[70px] border-2 rounded-[8px] flex items-center justify-center cursor-pointer p-1 transition-all ${activeImage === idx ? "border-[#8cc63f]" : "border-gray-200 hover:border-gray-300"}`}>
                    <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              <button className="w-6 h-16 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
              </button>
            </div>

            {/* Thông tin Đại lý & Phụ kiện */}
            <div className="mt-auto">
              <p className="text-center text-[12px] text-gray-500 mb-2">
                MacOne là đại lý bán lẻ uỷ quyền các nhà phân phối chính hãng Apple Việt Nam
              </p>
              <div className="border border-gray-300 rounded-[4px] p-4 text-[13px] text-center text-gray-700 mb-6 leading-relaxed bg-[#f9f9f9]">
                Sản phẩm chính hãng mới 100% nguyên seal. Phụ kiện chính hãng gồm: hộp trùng imei, sạc, cable, sách hướng dẫn
              </div>

              <h3 className="font-bold text-[15px] mb-4">Phụ kiện liên quan</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-[8px] p-4 flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#8cc63f] text-white text-[10px] font-bold px-3 py-1 rounded-b-[4px]">MỚI</span>
                  <img src={macbookImg} alt="Trackpad" className="w-[120px] h-[100px] object-contain mb-3 mt-4" />
                  <h4 className="text-[13px] font-bold mb-1 line-clamp-2">Apple Magic Trackpad</h4>
                  <p className="text-[11px] text-gray-500 mb-2">2024 (USB-C) – Multi-Touch Surface</p>
                  <p className="text-[14px] font-bold text-red-600 mt-auto">3.050.000đ</p>
                </div>
                <div className="border border-gray-200 rounded-[8px] p-4 flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#8cc63f] text-white text-[10px] font-bold px-3 py-1 rounded-b-[4px]">SẴN HÀNG</span>
                  <img src={macbookImg} alt="Keyboard" className="w-[120px] h-[100px] object-contain mb-3 mt-4" />
                  <h4 className="text-[13px] font-bold mb-1 line-clamp-2">Apple Magic Keyboard with Touch ID</h4>
                  <p className="text-[11px] text-gray-500 mb-2">chip Apple silicon</p>
                  <p className="text-[14px] font-bold text-red-600 mt-auto">4.190.000đ</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CỘT PHẢI ================= */}
          <div className="lg:col-span-7 flex flex-col">
            
            <h1 className="text-[22px] font-bold text-[#111] mb-4 leading-snug">
              MacBook Pro 2024 14 inch Apple M4 PRO 12-Core CPU 16-Core GPU 24GB RAM 1TB SSD – NEW
            </h1>

            <div className="flex flex-wrap items-center justify-between mb-6 pb-4 border-b border-gray-200 gap-4">
              <div>
                <p className="text-[24px] font-bold text-red-600">55.590.000đ</p>
                <div className="flex items-center gap-2 mt-2 text-[14px]">
                  <span className="font-semibold">Màu sắc:</span>
                  <div onClick={() => setSelectedColor("Space Black")} className={`w-6 h-6 rounded-full bg-[#2e2e30] border-2 cursor-pointer ${selectedColor === "Space Black" ? "border-[#8cc63f]" : "border-transparent"}`}></div>
                  <div onClick={() => setSelectedColor("Silver")} className={`w-6 h-6 rounded-full bg-[#e3e4e5] border-2 cursor-pointer ${selectedColor === "Silver" ? "border-[#8cc63f]" : "border-gray-300"}`}></div>
                </div>
              </div>
              <div className="text-right text-[13px]">
                <p>Trả góp từ <span className="text-red-600 font-bold">5.031.000đ/tháng</span></p>
                <p className="mt-1">Tư vấn KH Doanh nghiệp: <span className="text-red-600 font-bold">0936 368 455</span></p>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-center mb-2"><span className="font-bold text-[14px]">Ram</span></div>
              <div className="grid grid-cols-3 gap-3">
                {["24GB RAM", "48GB RAM"].map((ram) => (
                  <button key={ram} onClick={() => setSelectedRam(ram)} className={`h-[45px] rounded-[6px] border text-[13px] font-medium transition-all ${selectedRam === ram ? "border-blue-500 text-blue-600 bg-blue-50/30 shadow-[0_0_0_1px_rgba(59,130,246,1)]" : "border-gray-300 hover:border-gray-400"}`}>{ram}</button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <div className="flex justify-between items-center mb-2"><span className="font-bold text-[14px]">Ổ cứng</span></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {storages.map((item) => (
                  <button key={item.capacity} onClick={() => setSelectedStorage(item.capacity)} className={`p-2 rounded-[6px] border transition-all flex flex-col items-center justify-center gap-1 ${selectedStorage === item.capacity ? "border-blue-500 text-blue-600 bg-blue-50/30 shadow-[0_0_0_1px_rgba(59,130,246,1)]" : "border-gray-300 hover:border-gray-400"}`}>
                    <span className="font-bold text-[13px]">{item.capacity}</span>
                    <span className="text-[12px] text-gray-500">{item.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <a href="#" className="text-[13px] font-bold text-blue-600 flex items-center gap-1 hover:underline">
                LỰA CHỌN CẤU HÌNH TUỲ CHỈNH MACBOOK CTO <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400" />
              </a>
            </div>

            <div className="border border-gray-200 rounded-[8px] p-4 flex items-center gap-4 hover:shadow-sm transition-all mb-8 bg-[#fdfdfd]">
              <div className="w-[80px] h-[50px] bg-white border border-gray-100 rounded flex shrink-0 items-center justify-center overflow-hidden">
                 <img src={macbookImg} alt="warranty" className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] font-bold flex items-center gap-1">Gói bảo hành MacOne Care</h3>
                <p className="text-[12px] text-gray-600">Bảo hành 1 đổi 1 nguyên seal 30 ngày</p>
                <p className="text-[14px] font-bold text-red-600 mt-1">+390.000 đ</p>
              </div>
              <div onClick={() => setIsWarrantySelected(!isWarrantySelected)} className={`w-[40px] h-[22px] rounded-full relative cursor-pointer transition-colors ${isWarrantySelected ? "bg-green-500" : "bg-gray-300"}`}>
                <div className={`w-[18px] h-[18px] bg-white rounded-full absolute top-[2px] transition-transform shadow-sm ${isWarrantySelected ? "left-[20px]" : "left-[2px]"}`}></div>
              </div>
            </div>

            <ul className="text-[13.5px] text-gray-800 space-y-2 mb-6">
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-[#7fb840] mr-2 w-4" /> Sản phẩm chính hãng Apple Việt Nam, mới 100% nguyên seal</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-[#7fb840] mr-2 w-4" /> Giá đã bao gồm VAT</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-[#7fb840] mr-2 w-4" /> Bảo hành 12 tháng chính hãng và MACONE</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-[#7fb840] mr-2 w-4" /> Giảm giá 10% khi mua phụ kiện kèm theo</li>
            </ul>

            <div className="flex flex-col gap-3 mb-6">
              <button className="w-full bg-[#7fb840] hover:bg-[#6ca035] text-white rounded-[6px] py-3 flex flex-col items-center justify-center transition-colors shadow-md">
                <span className="font-bold text-[18px]">MUA NGAY</span>
                <span className="text-[12px] font-light">Giao hàng tận nhà hoặc nhận tại cửa hàng</span>
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-[#2a2a2a] hover:bg-black text-white rounded-[6px] py-2 px-2 flex items-center justify-center gap-3 transition-colors shadow-sm">
                  <FontAwesomeIcon icon={faShoppingCart} className="text-[20px]" />
                  <div className="text-left flex flex-col">
                    <span className="font-bold text-[14px]">THÊM VÀO GIỎ</span>
                    <span className="text-[11px] font-light text-gray-300">Chọn thêm món đồ khác</span>
                  </div>
                </button>
                <button className="bg-[#2a2a2a] hover:bg-black text-white rounded-[6px] py-2 px-2 flex items-center justify-center gap-3 transition-colors shadow-sm">
                  <FontAwesomeIcon icon={faPiggyBank} className="text-[20px]" />
                  <div className="text-left flex flex-col">
                    <span className="font-bold text-[14px]">MUA TRẢ GÓP</span>
                    <span className="text-[11px] font-light text-gray-300">Thủ tục đơn giản</span>
                  </div>
                </button>
              </div>
            </div>

            <ul className="text-[13px] text-gray-700 space-y-3 mb-8">
              <li><FontAwesomeIcon icon={faLaptop} className="w-5 text-center mr-2 text-gray-800" /> Dùng thử 10 ngày miễn phí đổi máy. (MacBook Like New)</li>
              <li><FontAwesomeIcon icon={faBoxOpen} className="w-5 text-center mr-2 text-gray-800" /> Lỗi 1 Đổi 1 trong 30 ngày đầu. (MacBook Like New)</li>
              <li><FontAwesomeIcon icon={faTruckFast} className="w-5 text-center mr-2 text-gray-800" /> Giao hàng tận nhà toàn quốc</li>
              <li><FontAwesomeIcon icon={faThumbsUp} className="w-5 text-center mr-2 text-gray-800" /> Thanh toán khi nhận hàng (nội thành)</li>
              <li><FontAwesomeIcon icon={faPhoneVolume} className="w-5 text-center mr-2 text-gray-800" /> Gọi <span className="text-blue-600 font-bold">0936 096 900</span> để được tư vấn mua hàng (Miễn phí)</li>
            </ul>

            {/* Bảng Thông số kỹ thuật - CÓ LOGIC XỔ RA */}
            <div className="border border-gray-200 rounded-[8px] overflow-hidden">
              <div className="p-4 bg-[#fcfcfc] border-b border-gray-200">
                <h3 className="font-bold text-[15px]">Thông số kỹ thuật</h3>
              </div>
              <table className="w-full text-[13px] text-left">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-gray-50 w-1/3 text-gray-600 font-medium">Bộ xử lý CPU</td>
                    <td className="p-3 bg-white">Chip Apple M4 Pro với CPU 12 lõi và Neural Engine 16 lõi</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-gray-50 text-gray-600 font-medium">Bộ nhớ RAM</td>
                    <td className="p-3 bg-white">24GB</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-gray-50 text-gray-600 font-medium">Màn hình</td>
                    <td className="p-3 bg-white">Màn hình Liquid Retina XDR 14 inch, độ phân giải 3024x1964</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 bg-gray-50 text-gray-600 font-medium">Card màn hình</td>
                    <td className="p-3 bg-white">GPU 16 lõi</td>
                  </tr>
                  <tr className={isSpecsExpanded ? "border-b border-gray-100" : ""}>
                    <td className="p-3 bg-gray-50 text-gray-600 font-medium">Ổ cứng</td>
                    <td className="p-3 bg-white">1TB SSD</td>
                  </tr>
                  
                  {/* Các dòng bị ẩn đi khi chưa bấm xem chi tiết */}
                  {isSpecsExpanded && (
                    <>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 bg-gray-50 text-gray-600 font-medium">Cổng kết nối</td>
                        <td className="p-3 bg-white">3x Thunderbolt 5, HDMI, MagSafe 3, SDXC, 3.5mm jack</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 bg-gray-50 text-gray-600 font-medium">Camera</td>
                        <td className="p-3 bg-white">12MP Center Stage camera</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 bg-gray-50 text-gray-600 font-medium">Kích thước</td>
                        <td className="p-3 bg-white">Dày 1.55 cm - Nặng 1.6 kg</td>
                      </tr>
                      <tr>
                        <td className="p-3 bg-gray-50 text-gray-600 font-medium">Hệ điều hành</td>
                        <td className="p-3 bg-white">macOS Sequoia</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
              
              {/* Nút Xem chi tiết / Thu gọn */}
              <div 
                onClick={() => setIsSpecsExpanded(!isSpecsExpanded)}
                className="text-center p-3 text-[13px] text-blue-600 font-medium cursor-pointer hover:bg-gray-50 border-t border-gray-200 transition-colors flex justify-center items-center gap-1"
              >
                {isSpecsExpanded ? (
                  <>Thu gọn <FontAwesomeIcon icon={faChevronUp} className="text-[10px]" /></>
                ) : (
                  <>Xem Chi Tiết <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" /></>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;