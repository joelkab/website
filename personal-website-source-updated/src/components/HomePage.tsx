// HomePage.tsx
// This component represents the Home page content

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Website</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Hello! This is the homepage of my personal website. I'm a CS major currently learning web development.
        </p>
        
        <p className="mb-4">
          This is a simple template that you can build upon as you learn more about web development.
        </p>
        
        {/* You can add more sections here as you learn */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Add Your Content Here</h2>
          <p>
            As you learn more about React and web development, you can expand this section with:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Your skills and expertise</li>
            <li>Projects you've worked on</li>
            <li>Your education background</li>
            <li>Contact information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
