const AboutUs = () => {
  return (
    <div className="px-14 py-20 space-y-16">
      <h1 className="text-center text-5xl text-black font-medium mb-10">
        Visi dan Misi
      </h1>

      <div className="space-y-10 pb-96 px-32">
        <article>
          <p className="font-medium text-xl w-[50%] tracking-wide">
            Visi Asosiasi ini ialah menjadikan pemuda sebagai garda terdepan
            dalam mewujudkan Indonesia Maju dan Mandiri berbasis sumber daya
            alam, bumi, air, dan energi dengan pendekatan pembangunan
            berkelanjutan.
          </p>
        </article>

        <article className="relative">
          <div className="absolute right-0 w-[50%] font-medium text-xl space-y-2">
            <h5>Misi Asosiasi ini ialah :</h5>

            <ul className="list-disc mx-10 space-y-4 tracking-wide">
              <li>
                Menyiapkan sumber daya manusia bidang kebumian yang profesional,
                berjiwa kepemimpinan, cinta tanah air, berdaya saing global, dan
                memiliki kepedulian sosial
              </li>

              <li>
                Mengembangkan ilmu pengetahuan dan teknologi kebumian yang
                mutakhir, efektif, efisien, dan ramah lingkungan.
              </li>

              <li>Menguatkan budaya rama</li>

              <li>
                lingkungan dan pemanfaatan sumber daya alam berkelanjutan.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutUs;
