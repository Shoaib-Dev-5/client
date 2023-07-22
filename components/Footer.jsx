const Footer = () => {
  return (
    <div className="flex flex-col px-3 rounded-sm jusb py-1 bg-white  shadow-sm border border-gray-100 [&>*]:py-2 text-gray-800 text-sm space-y-2 divide-y">
      <div className="w-full flex flex-wrap">
        <div className="w-1/2">
          <p>User Agreement</p>
          <p>Content Policy</p>
        </div>
        <div className="w-1/2">
          <p>Privacy Policy</p>
          <p>Modrate code of conduct</p>
        </div>
      </div>
      {/* language */}
      <div className="w-full">
        <ul className=" [&>*]:w-1/2  flex flex-wrap">
          <li>English</li>
          <li>Francais</li>
          <li>Italiano</li>
          <li>Deutsch</li>
          <li>Espanol</li>
          <li>Portugues</li>
        </ul>
      </div>
      <div>
        <p>Reddit Inc. © 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
