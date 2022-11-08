document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  //   const company = document.getElementById("submit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const businessemail = document.getElementById("businessemail");
    const company = document.getElementById("company");
    const select = document.getElementById("mySelect");
    if (!firstname.value) {
      firstname.classList.add("error__input");

      const tooltip = bootstrap.Tooltip.getOrCreateInstance(firstname, {
        trigger: "manual",
      }).show();
      return;
    }
    if (!lastname.value) {
      lastname.classList.add("error__input");
      const tooltip = bootstrap.Tooltip.getOrCreateInstance(lastname, {
        trigger: "manual",
      }).show();
      return;
    }
    if (!businessemail.value) {
      businessemail.classList.add("error__input");
      const tooltip = bootstrap.Tooltip.getOrCreateInstance(businessemail, {
        trigger: "manual",
      }).show();
      return;
    }
    if (!company.value) {
      company.classList.add("error__input");
      const tooltip = bootstrap.Tooltip.getOrCreateInstance(company, {
        trigger: "manual",
      }).show();
      return;
    }

    if (select.options[select.selectedIndex].value === "") {
      select.classList.add("error__input");
      const tooltip = bootstrap.Tooltip.getOrCreateInstance(select, {
        trigger: "manual",
      }).show();
      return;
    }

    window.location.href = "/thank.html";

    // validateInputs();
  });
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const businessemail = document.getElementById("businessemail");
  const company = document.getElementById("company");
  const select = document.getElementById("mySelect");
  firstname.addEventListener("input", (e) => {
    firstname.classList.remove("error__input");
    lastname.classList.remove("error__input");
    businessemail.classList.remove("error__input");
    company.classList.remove("error__input");
    select.classList.remove("error__input");
    bootstrap.Tooltip.getOrCreateInstance(firstname).hide();
    bootstrap.Tooltip.getOrCreateInstance(lastname).hide();
    bootstrap.Tooltip.getOrCreateInstance(businessemail).hide();
    bootstrap.Tooltip.getOrCreateInstance(company).hide();
  });
  lastname.addEventListener("input", (e) => {
    firstname.classList.remove("error__input");
    lastname.classList.remove("error__input");
    businessemail.classList.remove("error__input");
    company.classList.remove("error__input");
    select.classList.remove("error__input");
    bootstrap.Tooltip.getOrCreateInstance(firstname).hide();
    bootstrap.Tooltip.getOrCreateInstance(lastname).hide();
    bootstrap.Tooltip.getOrCreateInstance(businessemail).hide();
    bootstrap.Tooltip.getOrCreateInstance(company).hide();
  });
  businessemail.addEventListener("input", (e) => {
    firstname.classList.remove("error__input");
    lastname.classList.remove("error__input");
    businessemail.classList.remove("error__input");
    company.classList.remove("error__input");
    select.classList.remove("error__input");
    bootstrap.Tooltip.getOrCreateInstance(firstname).hide();
    bootstrap.Tooltip.getOrCreateInstance(lastname).hide();
    bootstrap.Tooltip.getOrCreateInstance(businessemail).hide();
    bootstrap.Tooltip.getOrCreateInstance(company).hide();
  });
  company.addEventListener("input", (e) => {
    firstname.classList.remove("error__input");
    lastname.classList.remove("error__input");
    businessemail.classList.remove("error__input");
    company.classList.remove("error__input");
    select.classList.remove("error__input");
    bootstrap.Tooltip.getOrCreateInstance(firstname).hide();
    bootstrap.Tooltip.getOrCreateInstance(lastname).hide();
    bootstrap.Tooltip.getOrCreateInstance(businessemail).hide();
    bootstrap.Tooltip.getOrCreateInstance(company).hide();
  });
  select.addEventListener("input", (e) => {
    firstname.classList.remove("error__input");
    lastname.classList.remove("error__input");
    businessemail.classList.remove("error__input");
    company.classList.remove("error__input");
    select.classList.remove("error__input");
    bootstrap.Tooltip.getOrCreateInstance(firstname).hide();
    bootstrap.Tooltip.getOrCreateInstance(lastname).hide();
    bootstrap.Tooltip.getOrCreateInstance(businessemail).hide();
    bootstrap.Tooltip.getOrCreateInstance(company).hide();
  });
});
