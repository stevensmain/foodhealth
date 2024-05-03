export function Banner() {
  return (
    <div className="bg-[#FFB74B] p-10 md:rounded-lg md:rounded-br-none bg-[url('/images/salad-mobile.png')] md:bg-[url('/images/salad.png')] bg-no-repeat bg-right-top bg-contain">
      <h2 className="text-4xl text-white font-semibold">
        Discount
        <br />
        New Menu!
      </h2>
      <p className="text-white max-w-72">
        Get Free Shipping Every $30 With No Minimum Purchase
      </p>
    </div>
  );
}
