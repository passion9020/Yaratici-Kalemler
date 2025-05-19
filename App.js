import React from 'react';

export default function YaratıcıKalemlerAd() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ color: '#ff007f', textAlign: 'center', fontSize: '2em' }}>Yaratıcı Kalemler</h1>
            <p style={{ color: '#555', textAlign: 'center', fontSize: '1.2em' }}>
                8-11 yaş arası çocuklar için yaratıcı yazarlık atölyesi
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center', fontSize: '1em' }}>
                <li>✅ Birebir yazarlık koçluğu</li>
                <li>✅ Eğlenceli yazma oyunları</li>
                <li>✅ Kahraman yaratma ve hikaye inşası</li>
                <li>✅ Online topluluk üyeliği</li>
            </ul>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button style={{ backgroundColor: '#ff007f', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Şimdi Kayıt Ol!
                </button>
            </div>
        </div>
    );
}
