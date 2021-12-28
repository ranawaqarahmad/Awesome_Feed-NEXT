import { useRouter } from "next/router";
import CustomButton from "../ui/Button";
import BasicSelect from "../ui/BasicSelect";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
});

const MainNavigation = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <header className={classes.root}>
      <div className="d-flex align-items-center">
        {/* <Link href="/" passHref> */}
        <Image src={Logo} alt="logo" />
        {/* </Link> */}
        <div className="logo-txt">
          <h1 className="m-0">Awesome Feed App</h1>
          <p className="m-0 light-grey-txt">by Awesome store</p>
        </div>
      </div>

      <div className="btn-container">
        <CustomButton
          className="butn"
          buttonStyle="btn-light-green"
          buttonSize="btn-lrg"
          onClick={() => {
            router.push("/change-plan");
          }}
        >
          Change Plan
        </CustomButton>
        <CustomButton
          className="butn"
          buttonStyle="btn-light-green"
          buttonSize="btn-lrg"
          onClick={() => router.push("/add-feed")}
        >
          Add a product feed
        </CustomButton>
        <CustomButton
          className="butn"
          buttonStyle="btn-light-green"
          buttonSize="btn-lrg"
        >
          Edit settings
        </CustomButton>
        <CustomButton
          className="butn"
          buttonStyle="btn-light-green"
          buttonSize="btn-lrg"
        >
          Update products & feeds
        </CustomButton>
        <CustomButton
          className="butn"
          buttonStyle="btn-light-green"
          buttonSize="btn-lrg"
          disabled={true}
        >
          Edit Google
        </CustomButton>
        {/* <CustomButton className="butn" buttonStyle="btn-white"> */}
        <BasicSelect />
        {/* </CustomButton> */}
      </div>
    </header>
  );
};

export default MainNavigation;
