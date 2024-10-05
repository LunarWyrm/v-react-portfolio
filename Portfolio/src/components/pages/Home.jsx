export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
          src="/images/V_Profile_2024.jpg"
          alt="v_profile"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: '50% 20%',
            boxShadow: `
              0 0 8px 4px rgba(255, 255, 255, 0.8), 0 0 20px 8px rgba(55, 0, 128, 0.7)
            `
          }}
        />
        <h1 class="name">V</h1>
      </div>
    </div>
  );
}
