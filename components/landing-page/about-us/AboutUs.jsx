const AboutUs = () => {
  return (
    <div className="space-y-16">
      <div className="bg-gray-900 px-32 py-40">
        <h1 className="text-center text-5xl text-white font-medium">
          Visi dan Misi
        </h1>
      </div>

      <div className="space-y-10 pb-96 px-20">
        <article className="my-32">
          <p className="font-medium text-xl tracking-wide text-center">
            Visi Asosiasi ini ialah menjadikan pemuda sebagai garda terdepan
            dalam mewujudkan Indonesia Maju dan Mandiri berbasis sumber daya
            alam, bumi, air, dan energi dengan pendekatan pembangunan
            berkelanjutan.
          </p>
        </article>

        <article className="relative">
          <div className="font-medium text-xl text-center">
            <h3 className="text-4xl">Misi</h3>

            <div className="mx-5 py-20 tracking-wide grid grid-cols-3 gap-8">
              <div className="space-y-5">
                <div className="text-2xl rounded-full bg-[#7B2418] aspect-square w-16 text-white mx-auto flex justify-center items-center">1</div>
                <p>
                  Mengembangkan ilmu pengetahuan dan teknologi kebumian yang mutakhir, efektif, efisien, dan ramah lingkungan.
                </p>
              </div>

              <div className="space-y-5">
                <div className="text-2xl rounded-full bg-[#7B2418] aspect-square w-16 text-white mx-auto flex justify-center items-center">2</div>
                <p>
                  Menyiapkan sumber daya manusia bidang kebumian yang profesional, berjiwa kepemimpinan, cinta tanah air, berdaya saing global, dan memiliki kepedulian sosial.
                </p>
              </div>
              
              <div className="space-y-5">
                <div className="text-2xl rounded-full bg-[#7B2418] aspect-square w-16 text-white mx-auto flex justify-center items-center">3</div>
                <p>
                  Menguatkan budaya ramah lingkungan dan pemanfaatan sumber daya alam berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutUs;
