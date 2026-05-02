const NUMBER = "917990273955";

function url(msg: string) {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const wa = {
  general: () => url("Hi KodTex! I'd like to know more about your fabrics."),
  productInquiry: (name: string, category: string) =>
    url(
      `Hi KodTex! I'm interested in the ${name} (${category} fabric). Could you share pricing and availability?`
    ),
  sampleRequest: (name: string) =>
    url(
      `Hi KodTex! I'd like to order a sample or shade chart for ${name}. What are the options and pricing?`
    ),
  bulkInquiry: () =>
    url(
      "Hi KodTex! I'm looking for fabric in larger quantities. Can we discuss pricing, availability, and customisation?"
    ),
  tradeInquiry: () =>
    url(
      "Hi KodTex! I represent a business and would like to discuss trade/bulk fabric requirements."
    ),
};
