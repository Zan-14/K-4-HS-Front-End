const LoginPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center font-montserrat bg-[#E5E5E5]">
      <div>
        <div className="text-center">
          <p>
            Apakah anda mencari pekerjaan?
            <a className="text-[#0061B9]" href="#">
              Klik di sini.
            </a>
          </p>
        </div>
        <div className="p-10 bg-slate-50 flex gap-5  rounded-xl shadow-md">
          <div className="security">
            <h3 className="text-3xl font-bold mb-5">Peringatan keamanan</h3>
            <div className="pl-5 max-w-md space-y-5">
              <div className="point">
                <p>
                  Selalu pastikan Anda berada di{" "}
                  <span className="font-semibold">situs resmi</span>{" "}
                  <a className="text-[#0575B3]" href="#">
                    (www.jobstreet.co.id/id/cms/employer)
                  </a>
                  dan situs telah aman dan terjamin sebelum proses log in.
                </p>
              </div>
              <div className="point">
                <p>
                  Mohon menjaga keamanan detil login SiVA Anda dan{" "}
                  <span className="font-semibold">tidak merespon</span>{" "}
                  permintaan login dari website dan pihak- pihak scam yang
                  mencurigakan.
                </p>
              </div>
              <div className="point">
                <p>
                  JobStreet.com <span className="font-semibold">tidak</span>{" "}
                  akan pernah meminta detail login Anda.
                </p>
              </div>
            </div>
            <div className="mt-5 max-w-md">
              <p>
                Jika Anda menemukan hal-hal yang mencurigakan atau Anda merasa
                ragu, harap segera menghubungi kami.
              </p>
            </div>
          </div>
          <div className="middle" />
          <div className="login">
            <h3 className="login-company">Login Perusahaan</h3>
            <div className="logins">
              <form action="">
                <div className="log-in">
                  <label htmlFor="">Login ID Perusahaan</label>
                  <br />
                  <input type="text" placeholder="Login ID" />
                </div>
                <div className="log-in">
                  <label htmlFor="">Kata sandi</label>
                  <br />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="forgot-password">
                  <a href="#">Lupa kata sandi ?</a>
                </div>
                <div className="button">
                  <button type="submit">Masuk</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
