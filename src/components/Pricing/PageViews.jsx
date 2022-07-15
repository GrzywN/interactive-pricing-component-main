import PropTypes from "prop-types";

function PageViews({ pageViews }) {
  return (
    <p className="text-xs font-extrabold capitalize tracking-widest text-GrayishBlue md:text-[0.875rem] md:leading-[1.1875rem]">
      {pageViews} PAGEVIEWS
    </p>
  );
}

PageViews.propTypes = {
  pageViews: PropTypes.string.isRequired,
};

export default PageViews;
