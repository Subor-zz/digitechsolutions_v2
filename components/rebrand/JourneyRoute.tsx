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
          d="M97 0V92H95V205H97V326H94V454H97V576H95V704H97V820H94V910H96V1000"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--main"
          d="M97 0V92H95V205H97V326H94V454H97V576H95V704H97V820H94V910H96V1000"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M95 148H91V224H88"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--friction"
          d="M95 148H91V224H88"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M94 390H90V476H87"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--diagnosis"
          d="M94 390H90V476H87"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M95 638H91V690H87M91 638V746H87"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--routes"
          d="M95 638H91V690H87M91 638V746H87"
        />
        <path
          className="journey-route__path journey-route__path--base journey-route__path--branch"
          d="M94 858H90V910H96"
        />
        <path
          className="journey-route__path journey-route__path--draw journey-route__path--branch journey-route__branch--transfer"
          d="M94 858H90V910H96"
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
