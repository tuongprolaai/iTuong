import { useState } from "react";
import { Link } from "react-router"; // hoặc react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faMinus,
  faPlus,
  faShieldHalved,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

// Placeholder ảnh sản phẩm
import macbookImg from "../../assets/img/macneo.png";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MacBook Air 2022 13 inch Apple M2 16GB RAM 256GB SSD – NEW",
      image: macbookImg,
      price: 19690000,
      quantity: 1,
      hasWarranty: false,
      warrantyPrice: 390000,
      // Đổi color thành selectedColor và thêm mảng availableColors
      selectedColor: "Starlight",
      availableColors: ["Starlight", "Space Gray", "Silver", "Midnight"],
    },
  ]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ";
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const calculateWarrantyTotal = () => {
    return cartItems.reduce((total, item) => {
      return (
        total + (item.hasWarranty ? item.warrantyPrice * item.quantity : 0)
      );
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateWarrantyTotal();
  };

  const updateQuantity = (id, delta) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const toggleWarranty = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, hasWarranty: !item.hasWarranty };
        }
        return item;
      }),
    );
  };

  // Hàm mới: Cập nhật màu sắc sản phẩm
  const updateColor = (id, newColor) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, selectedColor: newColor };
        }
        return item;
      }),
    );
  };

const totalQuantity = cartItems.reduce(
  (total, item) => total + item.quantity,
  0,
);

  return (
    <div className="w-full bg-[#f5f5f7] min-h-screen py-10 font-sans text-[#333]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-[24px] text-gray-800"
          />
          <h1 className="text-[24px] font-bold text-gray-800 tracking-tight">
            Giỏ hàng của bạn
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center max-w-2xl mx-auto">
            <p className="text-[16px] text-gray-500 mb-6">
              Giỏ hàng của bạn đang trống.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#0066cc] text-white px-8 py-3 rounded-full font-medium hover:bg-[#005bb5] transition-colors"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ================= CỘT TRÁI: SẢN PHẨM & FORM ================= */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-[18px] font-bold mb-4 pb-4 border-b border-gray-100">
                  Sản phẩm ({totalQuantity})
                </h2>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-50 last:border-0 last:pb-0"
                    >
                      <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-[#f5f5f7] rounded-xl p-2 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-w-full max-h-full object-contain mix-blend-multiply"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-4">
                            <Link
                              to="/detail"
                              className="text-[15px] font-semibold text-gray-900 hover:text-[#0066cc] leading-snug"
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 p-1"
                            >
                              <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                          </div>

                          {/* ======= PHẦN CHỌN MÀU SẮC ĐÃ ĐƯỢC LÀM LẠI ======= */}
                          <div className="mt-2.5 flex items-center gap-2">
                            <label className="text-[13px] text-gray-500">
                              Phân loại:
                            </label>
                            <select
                              value={item.selectedColor}
                              onChange={(e) =>
                                updateColor(item.id, e.target.value)
                              }
                              className="border border-gray-200 rounded-md px-2.5 py-1 text-[13px] font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] cursor-pointer transition-colors"
                            >
                              {item.availableColors.map((color, idx) => (
                                <option key={idx} value={color}>
                                  {color}
                                </option>
                              ))}
                            </select>
                          </div>
                          {/* ================================================= */}

                          <label className="inline-flex items-center gap-2 mt-3 bg-blue-50/60 hover:bg-blue-50 px-3 py-2 rounded-lg cursor-pointer transition-colors border border-blue-100/50 w-max">
                            <input
                              type="checkbox"
                              className="accent-[#0066cc] w-4 h-4 cursor-pointer rounded"
                              checked={item.hasWarranty}
                              onChange={() => toggleWarranty(item.id)}
                            />
                            <span className="text-[13px] text-gray-700 flex items-center gap-1.5">
                              <FontAwesomeIcon
                                icon={faShieldHalved}
                                className="text-[#0066cc]"
                              />
                              Thêm bảo hành MacOne Care
                              <span className="font-semibold text-gray-900">
                                +{formatPrice(item.warrantyPrice)}
                              </span>
                            </span>
                          </label>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex flex-col items-end">
  <span className="text-gray-500 text-[13px]">
    {formatPrice(item.price)} × {item.quantity}
  </span>

  <span className="font-bold text-red-600 text-[16px]">
    {formatPrice(item.price * item.quantity)}
  </span>
</div>

                          <div className="flex items-center bg-[#f5f5f7] rounded-lg border border-gray-200">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-l-lg transition-colors"
                            >
                              <FontAwesomeIcon
                                icon={faMinus}
                                className="text-[10px]"
                              />
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-10 h-8 text-center text-[13px] font-semibold bg-transparent focus:outline-none"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-r-lg transition-colors"
                            >
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="text-[10px]"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KHỐI 2: FORM THÔNG TIN KHÁCH HÀNG */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-[18px] font-bold mb-5 pb-4 border-b border-gray-100">
                  Thông tin khách hàng
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      placeholder="Họ và tên người nhận *"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-all bg-[#fafafa] focus:bg-white"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Số điện thoại *"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-all bg-[#fafafa] focus:bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email (không bắt buộc)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-all bg-[#fafafa] focus:bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <input
                      type="text"
                      placeholder="Địa chỉ nhận hàng (Số nhà, đường, phường/xã...) *"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-all bg-[#fafafa] focus:bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <textarea
                      placeholder="Ghi chú thêm về đơn hàng..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] transition-all bg-[#fafafa] focus:bg-white resize-none h-24"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CỘT PHẢI: TÓM TẮT ĐƠN HÀNG (STICKY) ================= */}
            <div className="lg:col-span-4">
              {/* Đã set sẵn top-[100px] để tránh bị Header che khuất như bạn phản hồi ở trên */}
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-[100px]">
                <h2 className="text-[18px] font-bold mb-5 pb-4 border-b border-gray-100">
                  Tóm tắt đơn hàng
                </h2>

                <div className="space-y-4 text-[14px] mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính</span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(calculateSubtotal())}
                    </span>
                  </div>

                  {calculateWarrantyTotal() > 0 && (
                    <div className="flex justify-between text-gray-600">
                      <span>Phí bảo hành</span>
                      <span className="font-medium text-gray-900">
                        {formatPrice(calculateWarrantyTotal())}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển</span>
                    <span className="font-medium text-green-600">Miễn phí</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5 mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-[16px]">Tổng cộng</span>
                    <span className="font-bold text-[22px] text-red-600">
                      {formatPrice(calculateTotal())}
                    </span>
                  </div>
                  <p className="text-[12px] text-right text-gray-500">
                    (Đã bao gồm VAT nếu có)
                  </p>
                </div>

                <button className="w-full bg-[#0066cc] hover:bg-[#005bb5] text-white font-bold text-[16px] py-4 rounded-xl transition-colors shadow-md shadow-blue-500/20 active:scale-[0.98]">
                  ĐẶT HÀNG NGAY
                </button>

                <div className="mt-4 text-center">
                  <p className="text-[12px] text-gray-500 flex items-center justify-center gap-1.5">
                    <FontAwesomeIcon icon={faShieldHalved} />
                    Thông tin của bạn được bảo mật an toàn
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
