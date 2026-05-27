import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, addToCart, removeFromCart, clearCart, totalPrice, savings } = useCart();
  const [showUpiModal, setShowUpiModal] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [address, setAddress] = useState(() => localStorage.getItem('userAddress') || '');
  const [addressError, setAddressError] = useState(false);

  if (!isOpen) return null;

  const deliveryFee = totalPrice > 0 ? 15 : 0;
  const govtTaxes = totalPrice > 0 ? 4 : 0;
  const grandTotal = totalPrice + deliveryFee + govtTaxes;

  // WhatsApp Order Text compiler
  const handleWhatsAppCheckout = () => {
    if (!address.trim()) {
      setAddressError(true);
      return;
    }
    const phone = "919631871702"; // Placeholder number
    let orderText = `*🛒 NEW ORDER - Rahul General Store *\n`;
    orderText += `----------------------------------\n`;
    orderText += `📍 *Delivery Address:* ${address.trim()}\n`;
    orderText += `----------------------------------\n\n`;
    orderText += `*Items Ordered:*\n`;

    cartItems.forEach((item, index) => {
      const itemCost = item.variant.price * item.quantity;
      orderText += `${index + 1}. *${item.product.name}* (${item.variant.weight})\n`;
      orderText += `   Qty: ${item.quantity} x ₹${item.variant.price} = *₹${itemCost}*\n`;
    });

    orderText += `\n----------------------------------\n`;
    orderText += `*Bill Summary:*\n`;
    orderText += `• Item Total: ₹${totalPrice}\n`;
    orderText += `• Delivery Fee: ₹${deliveryFee}\n`;
    orderText += `• Taxes & Charges: ₹${govtTaxes}\n`;
    orderText += `• *Grand Total: ₹${grandTotal}*\n`;
    if (savings > 0) {
      orderText += `\n🎁 *Total Savings: ₹${savings}*\n`;
    }
    orderText += `----------------------------------\n`;
    orderText += `Sent via Rahul general Store Quick-Commerce site.`;

    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSimulateUpi = () => {
    if (!address.trim()) {
      setAddressError(true);
      return;
    }
    setShowUpiModal(true);
  };

  const completeUpiPayment = () => {
    setShowUpiModal(false);
    setIsOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setIsOrderPlaced(false);
      onClose();
    }, 3000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs z-50 transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] bg-neutral-50 shadow-2xl z-50 flex flex-col justify-between transition-drawer animate-in slide-in-from-right duration-300">

        {/* Header */}
        <div className="bg-white px-5 py-4 border-b border-neutral-200 flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#0c831f]" />
            <h2 className="text-base font-black text-neutral-800 tracking-tight">My Cart</h2>
            <span className="bg-emerald-100 text-[#0c831f] text-xs font-extrabold px-2.5 py-0.5 rounded-full">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-5 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-6">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-4 border border-neutral-200/50">
                <ShoppingBag className="w-9 h-9 text-neutral-300" />
              </div>
              <h3 className="font-extrabold text-neutral-700 text-base mb-1">Your cart is empty</h3>
              <p className="text-neutral-400 text-xs font-semibold leading-relaxed max-w-[240px]">
                Add items from our premium selection of groceries, puja path, and jadi bootis.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-[#0c831f] text-white rounded-xl text-xs font-extrabold tracking-wider uppercase cursor-pointer hover:bg-[#0a6d1a] transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Promo Saving Badge */}
              {savings > 0 && (
                <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl px-4 py-3 flex items-center justify-between shrink-0 shadow-xs">
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-[#0c831f] uppercase tracking-wide">Awesome Savings!</span>
                    <span className="text-[11px] text-emerald-700 font-semibold mt-0.5">You are saving ₹{savings} on MRP</span>
                  </div>
                  <span className="text-xl font-black text-[#0c831f]">🎉</span>
                </div>
              )}

              {/* Items List */}
              <div className="bg-white border border-neutral-200/60 rounded-2xl p-4 flex flex-col gap-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-xs font-black text-neutral-400 uppercase tracking-wider">Item Details</span>
                  <button
                    onClick={clearCart}
                    className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear All
                  </button>
                </div>

                <div className="flex flex-col gap-4 divide-y divide-neutral-100">
                  {cartItems.map((item, index) => {
                    const itemKey = `${item.product.id}-${item.variant.weight}`;
                    return (
                      <div key={itemKey} className={`flex items-start justify-between gap-3 ${index > 0 ? 'pt-4' : ''}`}>
                        {/* Item image */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-10 h-10 object-contain rounded-lg border border-neutral-100 shrink-0 bg-neutral-50"
                        />

                        {/* Title & Weight */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-extrabold text-neutral-800 truncate leading-tight">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] text-neutral-400 font-bold block mt-1">
                            {item.variant.weight} • ₹{item.variant.price}
                          </span>
                        </div>

                        {/* Counter and Price */}
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          {/* Counter */}
                          <div className="flex items-center bg-neutral-100 rounded-lg text-neutral-700 font-bold select-none h-7 px-1.5">
                            <button
                              onClick={() => removeFromCart(item.product.id, item.variant.weight)}
                              className="p-1 hover:bg-neutral-200 rounded-md cursor-pointer transition-colors"
                            >
                              <Minus className="w-3 h-3 text-neutral-500" />
                            </button>
                            <span className="text-xs font-extrabold px-2.5 text-center min-w-[20px]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item.product, item.variant)}
                              className="p-1 hover:bg-neutral-200 rounded-md cursor-pointer transition-colors"
                            >
                              <Plus className="w-3 h-3 text-neutral-500" />
                            </button>
                          </div>

                          {/* Unit Total Price */}
                          <span className="text-xs font-black text-neutral-900">
                            ₹{item.variant.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Address Fill Option */}
              <div className="bg-white border border-neutral-200/60 rounded-2xl p-4 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-black text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-2">
                  <span className="text-base shrink-0">📍</span>
                  <span>Delivery Address</span>
                </div>

                <div className="relative">
                  <textarea
                    rows="3"
                    placeholder="Enter full delivery address (e.g. Flat/House no, building, street, landmark, city, pincode)..."
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      localStorage.setItem('userAddress', e.target.value);
                      if (e.target.value.trim()) {
                        setAddressError(false);
                      }
                    }}
                    className={`w-full text-xs border rounded-xl p-3 bg-neutral-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all font-medium text-neutral-800 placeholder-neutral-400 resize-none ${addressError
                      ? 'border-red-300 focus:ring-red-200/50 focus:border-red-500'
                      : 'border-neutral-200 focus:ring-[#0c831f]/20 focus:border-[#0c831f]'
                      }`}
                  />
                  {addressError && (
                    <span className="text-[10px] text-red-500 font-bold block mt-1">
                      ⚠️ Delivery address is required to proceed.
                    </span>
                  )}
                </div>
              </div>

              {/* Billing Summary */}
              <div className="bg-white border border-neutral-200/60 rounded-2xl p-4 flex flex-col gap-3 shadow-xs mb-8">
                <span className="text-xs font-black text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-2">Bill Summary</span>

                <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
                  <span>Item Total</span>
                  <span className="text-neutral-800">₹{totalPrice}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
                  <span>Delivery Partner Fee</span>
                  <span className="text-neutral-800">₹{deliveryFee}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-neutral-500 border-b border-neutral-100 pb-2">
                  <span>Govt Taxes & Handling</span>
                  <span className="text-neutral-800">₹{govtTaxes}</span>
                </div>

                <div className="flex items-center justify-between text-sm font-black text-neutral-950 pt-1">
                  <span>Grand Total</span>
                  <span className="text-base text-[#0c831f]">₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Actions */}
        {cartItems.length > 0 && (
          <div className="bg-white border-t border-neutral-200 p-4 shrink-0 shadow-xl flex flex-col gap-2">
            {/* Primary WhatsApp Action */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-between bg-[#0c831f] text-white px-5 py-3.5 rounded-xl font-extrabold text-sm shadow-md hover:bg-[#0a6d1a] transition-all cursor-pointer transform active:scale-98"
            >
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-emerald-100 uppercase tracking-widest">Proceed via WhatsApp</span>
                <span className="text-sm font-extrabold mt-0.5">Send Order Receipt</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-extrabold">₹{grandTotal}</span>
                <ArrowRight className="w-4 h-4 text-emerald-100" />
              </div>
            </button>
          </div>
        )}
      </div>

      {/* UPI QR Payment Modal Simulation */}
      {showUpiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-xs" onClick={() => setShowUpiModal(false)} />
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full relative z-10 shadow-2xl border border-neutral-100 text-center animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowUpiModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>



          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={completeUpiPayment}
              className="w-full bg-[#0c831f] hover:bg-[#0a6d1a] text-white py-3 rounded-xl font-bold text-xs cursor-pointer shadow-md transition-colors"
            >
              Simulate Successful Payment Response
            </button>
            <button
              onClick={() => setShowUpiModal(false)}
              className="w-full text-neutral-500 hover:text-neutral-700 py-1.5 font-bold text-xs cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>

      )}
    </>
  );
}
