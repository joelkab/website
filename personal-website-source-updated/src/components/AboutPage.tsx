// AboutPage.tsx
// This component represents the About page content

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          I am a Computer Science major passionate about technology and programming.
        </p>
        
        <p className="mb-4">
          This page is where you can share more information about yourself, your background, 
          interests, and goals.
        </p>
        
        {/* Placeholder for additional content */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Customize This Section</h2>
          <p>
            As you continue learning, you can expand this page with:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your educational background</li>
            <li>Professional experience</li>
            <li>Personal interests and hobbies</li>
            <li>Skills and technologies you're learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
