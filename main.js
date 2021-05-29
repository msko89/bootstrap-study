// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import Dropdown from 'bootstrap/js/dist/dropdown';

const dropdownElementList = [].slice.call(
  document.querySelectorAll('.dropdown-toggle')
);
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl);
});
