import CardInfo from "@/components/shared/card-info";

const SectionInvestmentCategories = () => {
  const investments = [
    {
      badge: "new",
      name: "Passive Farmers",
      description:
        "Invest and Watch as your money works for you. You don't have to do anythingelse but watch your investment grow",
      image: "",
      link: "https://wa.link/ph0ihp",
      amount: "100,000 plus",
      roi: "10% Monthly",
      button: "Learn More",
      date: "April, 2024",
    },
    {
      badge: "new",
      name: "Palm Oil Storage",
      description: "Invest in our palm oil storage facility",
      image: "",
      link: "https://wa.link/ph0ihp",
      amount: "100,000 plus",
      roi: "10% Monthly",
      button: "Learn More",
      date: "April, 2024",
    },
  ];
  return (
    <section className="section-with-small-py flex flex-col gap-20">
      <h2 className="heading-2">Check Our Investment Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {investments.map((invest, i) => (
          <div className="h-full" key={i}>
            <CardInfo {...invest} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionInvestmentCategories;
