import macneo from "@/assets/img/macneo.png";

function RelatedAccessories() {
    const items = [
        { name: "Magic Trackpad", price: "3.050.000đ" },
        { name: "Magic Keyboard", price: "4.190.000đ" },
    ];

    return (
        <div className="mt-10">
            <h2 className="font-semibold mb-4">Phụ kiện liên quan</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="border rounded-lg p-4 text-center hover:shadow"
                    >
                        <img
                            src={macneo}
                            className="h-24 mx-auto object-contain"
                        />

                        <p className="font-medium mt-2">{item.name}</p>

                        <p className="text-red-600 font-bold">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RelatedAccessories;
