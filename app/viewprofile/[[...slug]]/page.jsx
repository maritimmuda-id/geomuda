'use client';
// ** Import Components
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function viewProfilePage(props) {
  const { params } = props;
  const { slug } = params;

  // const encode = decodeURI(slug);

  // console.log(encode);
  // console.log(encode[0]);

  // Style untuk halaman view profile
  const profileStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  };

  const avatarStyle = {
    width: '150px',
    height: '200px',
    borderRadius: '10px',
    border: '1px solid black',
  };

  return (
    <div style={profileStyle}>
      <div>
        <div className="mb-4">
          <h1 className="text-3xl">Profil Anggota</h1>
          <div className="mt-4">
            <strong>No. Anggota:</strong> {slug[0]}
          </div>
          <div className="mt-2">
            <strong>Nama Anggota:</strong> {decodeURI(slug[1])}
          </div>
          <div className="mt-2">
            <strong>Organisasi Daerah:</strong> {decodeURI(slug[2])}
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '150px' }}>
        <img src={decodeURIComponent(slug[3])} alt="Foto Profil" style={avatarStyle} sizes="200" />
      </div>
    </div>
  );
}
