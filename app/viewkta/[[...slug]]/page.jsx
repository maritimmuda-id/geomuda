export default function viewKtaPage(props) {
  const { params } = props;
  const { slug } = params;

  return (
    <div>
      <div>
        <div className="mb-4">
          <h1 className="text-3xl">Profil Anggota</h1>
          <div className="mt-4">
            <strong>No. Anggota:</strong> {slug[0]}
          </div>
          <div className="mt-2">
            <strong>Nama Anggota:</strong> {slug[1]}
          </div>
          <div className="mt-2">
            <strong>Organisasi Daerah:</strong> {slug[2]}
          </div>
        </div>
      </div>
      {/* <div style={{ marginLeft: '150px' }}>{dataKta && dataKta.photo && <img src={dataKta.photo} alt="Foto Profil" style={avatarStyle} />}</div> */}
    </div>
  );
}
