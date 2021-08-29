import { useState } from "react";
import React from "react";
import edi from './img/edi.jpeg';
import rodhiyah from './img/rodhiyah.jpeg';
import shella from './img/shella.jpeg';
import shofi from './img/shofi.jpeg';


function About(){
    const [profile] = useState([
        {
            nama : "Rodhiyah Desviana",
            alamat : "Siak - Riau",
            project : "Halaman List Data",
            pict : rodhiyah
        },  {
            nama : "Shella Batrisyia L",
            alamat : "Sidoarjo - Jawa Timur",
            project : "Halaman About",
            pict : shella
        },{
            nama : "Shofiyyah Salma",
            alamat : "Klaten - Jawa Tengah",
            project : "Style Responsive (CSS) & Routing",
            pict : shofi
        }, {
            nama : "Edi Suwanto",
            alamat : "Bandung - Jawa Barat",
            project : "Halaman Login",
            pict : edi
            
        }
    ]);
    return (
        <>
        <div>
            <h1>  About  </h1>
            <p> Kami dari kelompok 3 yang bertugas mengerjakan project tentang luar angkasa. Project ini terdiri dari Halaman List Data, Halaman About, dan Halaman Login.</p>
            </div>

            <div id="profile">
                {profile.map(profile =>(
                    <div key={profile.nama} className="Nama">
                        < img src={profile.pict} width="190px" alt="profile" />
                        <p style = {{fontWeight:'bold'}}>Nama : {profile.nama}</p>
                        <p style = {{fontWeight:'bold'}}>Alamat : {profile.alamat}</p>
                        <p style = {{fontWeight:'bold'}}>Tugas Project : {profile.project}</p>
                    </div>
                ))}

            </div>
        </>
    )
}

export default About;