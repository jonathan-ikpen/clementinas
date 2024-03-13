import { CardReview } from "./card-reviews";

const SectionCustomerReviews = () => {
  const reviews = [
    {
      testimonial:
        "Clementina you finish work 💃💃💃💃. <br> U don show her the video? <br> Clementina you are bad bado baddest",
      name: "Lawxy Julius",
      image: "/faces/avatar1.svg",
    },
    {
      testimonial:
        "Awww thank you 😊 Their plug can never. <br> Thank you for a hassle free order and delivery. I recieved my package hours before now. <br> The chicken is the star of my order 😊 cuts were so big and still many for the sizes they were cut. Thank you also for the gift, it was so thoughtful of you.",
      name: "Ruth",
      image: "/faces/avatar4.svg",
    },
    {
      testimonial:
        "I'm Daberchi, a graduate of Agricultural and Bio Resources Engineering, from Michael Okpara University of Agriculture, Umudike. <br> I was just surfing through IG this morning, and something led to another, and I stumbled across your page, and I loved it. I love what you do! 💖",
      name: "Daberchi",
      image: "/faces/avatar2.svg",
    },
    // {
    //   testimonial:
    //     "I've recieved it ma <br> I've even opened one <br/> Very sweet",
    //   name: "Thelnstyles",
    //   image: "/faces/avatar3.svg",
    // },
    // {
    //   testimonial:
    //     "If nor be you I nor dey trust people for money matter that's cos i believe you 💯 <br> Ok make i calculate my self, monday i will send you the amount am buying",
    //   name: "Tastytrills",
    //   image: "/faces/avatar5.svg",
    // },
  ];
  return (
    <section className="section pb-28 md:pb-60 flex flex-col gap-10 md:gap-24 justify-center items-center bg-muted">
      <div>
        <h1 className="heading-1 text-center">What Our Customers Say 💚</h1>
        <p className="paragraph-2 md:px-48 text-center">
          All foodstuffs from fresh fruits to crisp veggies, we serve to meet
          your cravings and give you maximum satisfaction while doing so.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <CardReview key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default SectionCustomerReviews;
