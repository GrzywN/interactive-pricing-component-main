import PropTypes from "prop-types";

function PageViews({ currentPageviews }) {
  return (
    <p className="text-xs font-extrabold tracking-widest text-GrayishBlue md:text-[0.875rem] md:leading-[1.1875rem]">
      {currentPageviews} Pageviews
    </p>
  );
}

PageViews.propTypes = {
  currentPageviews: PropTypes.string.isRequired,
};

export default PageViews;
