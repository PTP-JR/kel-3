import { useState } from "react";
import React from "react";
import edi from './img/edi.jpeg';
import rodhiyah from './img/rodhiyah.jpeg';
import shella from './img/shella.jpeg';
import shofi from './img/shofi.jpeg';
import {Card} from 'react-bootstrap'

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
        <div id="profile" >
            <h1 className= "judul2">  About  </h1>
            <p className= "ringkasan"><b>Kami dari kelompok 3 yang bertugas mengerjakan project tentang luar angkasa. Project ini terdiri dari Halaman List Data, Halaman About, dan Halaman Login.</b></p>

                {profile.map(profile =>(
                    <div key={profile.nama} className="Nama">
                        <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={profile.pict}  width="400px" height="400px" alt="profile"/>
                         <Card.Body width= "150px" height="150px" >
                        <Card.Text>
                        <p style = {{fontWeight:'bold'}}>Nama : {profile.nama}</p>
                        <p style = {{fontWeight:'bold'}}>Alamat : {profile.alamat}</p>
                        <p style = {{fontWeight:'bold'}}>Tugas Project : {profile.project}</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>


                    </div>
                ))}

            </div>
        </>
    )
}

export default About;