function Badge() {
  return (
    <div className="absolute right-0 flex h-[1.1875rem] w-[2.625rem] translate-x-[calc(100%+0.3125rem)] justify-center rounded-full bg-LightGrayishRed sm:w-20 sm:translate-x-[calc(100%+0.5625rem)]">
      <span className="mt-[0.125rem] text-[0.625rem] font-extrabold leading-[0.875rem] tracking-normal text-LightRed sm:hidden">
        -25%
      </span>
      <span className="mt-[0.125rem] hidden text-[0.625rem] font-extrabold leading-[0.875rem] tracking-normal text-LightRed sm:inline">
        -25% discount
      </span>
    </div>
  );
}

export default Badge;
