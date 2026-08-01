export function JourneyRoute() {
  return (
    <div className="journey-route" aria-hidden="true">
      <svg
        className="journey-route__map"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <path
          className="journey-route__path journey-route__path--base"
          d="M92 0V92H86V205H92V326H84V454H92V576H80V704H89V820H72V910H50V1000"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--main"
          d="M92 0V92H86V205H92V326H84V454H92V576H80V704H89V820H72V910H50V1000"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M86 148H70V224H57"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--friction"
          d="M86 148H70V224H57"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M84 390H68V476H54"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--diagnosis"
          d="M84 390H68V476H54"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M80 638H62V690H45M62 638V746H45"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--routes"
          d="M80 638H62V690H45M62 638V746H45"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M72 858H58V910H50"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--transfer"
          d="M72 858H58V910H50"
        />
      </svg>

      <span className="journey-route__gate journey-route__gate--hero" />
      <span className="journey-route__gate journey-route__gate--friction" />
      <span className="journey-route__gate journey-route__gate--diagnosis" />
      <span className="journey-route__gate journey-route__gate--routes" />
      <span className="journey-route__gate journey-route__gate--method" />
      <span className="journey-route__gate journey-route__gate--founder" />
      <span className="journey-route__gate journey-route__gate--scan" />
    </div>
  );
}
