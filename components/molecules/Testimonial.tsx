import { Testi } from "../organisms/Testi";

export default function YourPage() {
  return (
    <section
      className="py-8 mt-[13.5rem] max-lg:mt-[5.8125rem] max-lg:px-[1.4375rem]"
      id="testimonials"
    >
      <h2 className="text-[#101010] text-[2.5rem] font-medium mb-[7.6875rem] max-lg:mb-[2.9375rem] max-lg:text-[1.25rem]">
        TESTIMONIALS
      </h2>
      <Testi />
    </section>
  );
}
