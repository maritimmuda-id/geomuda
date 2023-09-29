const AboutUs = () => {
  return (
    <div className="space-y-16">
      <div className="bg-gray-900 px-16 py-40 space-y-16">
        <h1 className="text-center text-3xl md:text-5xl text-white font-medium">
          VISI
        </h1>
        <p className="font-medium text-lg md:text-xl tracking-wide text-center text-white">
            Visi Asosiasi ini ialah menjadikan pemuda sebagai garda terdepan
            dalam mewujudkan Indonesia Maju dan Mandiri berbasis sumber daya
            alam, bumi, air, dan energi dengan pendekatan pembangunan
            berkelanjutan.
          </p>
      </div>

      <div className="space-y-10 px-20">
        <article className="my-32">
 
        </article>

        <article className="relative">
          <div className="font-medium text-center">
            <h1 className="text-3xl md:text-5xl font-medium ">MISI</h1>

            <div className="mx-5 py-20 md:py-32 tracking-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
              <div className="space-y-5">
                <div className="text-xl md:text-2xl rounded-full bg-[#7B2418] aspect-square w-14 md:w-16 text-white mx-auto flex justify-center items-center">1</div>
                <p>
                  Mengembangkan ilmu pengetahuan dan teknologi kebumian yang mutakhir, efektif, efisien, dan ramah lingkungan.
                </p>
              </div>

              <div className="space-y-5">
                <div className="text-xl md:text-2xl rounded-full bg-[#7B2418] aspect-square w-14 md:w-16 text-white mx-auto flex justify-center items-center">2</div>
                <p>
                  Menyiapkan sumber daya manusia bidang kebumian yang profesional, berjiwa kepemimpinan, cinta tanah air, berdaya saing global, dan memiliki kepedulian sosial.
                </p>
              </div>
              
              <div className="space-y-5 md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4">
                <div className="text-xl md:text-2xl rounded-full bg-[#7B2418] aspect-square w-14 md:w-16 text-white mx-auto flex justify-center items-center">3</div>
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
