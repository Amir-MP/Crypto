import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  cardStyle: {
    display: "block",
    transitionDuration: "0.3s",
  },
  gridContainer: {
    paddingLeft: "20px",
    paddingBottom: "70px",
    paddingTop: "100px",
    paddingRight: "20px",
  },
  typography: {
    fontFamily: "Iranian_Sans",
  },
});

export default function HomeMore() {
  const classes = useStyle();
  return (
    <div>
      <Grid dir="rtl" container spacing={1} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://c.ndtvimg.com/2021-09/rff49thg_bitcoin_625x300_16_September_21.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  بیت کوین
                </Typography>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  variant="body2"
                  color="text.secondary"
                >
                  یک رمزارز و یک نظام پرداخت جهانی با کارکردهای مشابه پول بدون
                  پشتوانه است. از نظر فنی بیت‌کوین نخستین پول دیجیتال نامتمرکز
                  است، چرا که بدون بانک مرکزی یا مسئول مرکزی کار می‌کند. این
                  شبکه همتابه‌همتا است و تراکنش‌ها را مستقیماً و بدون واسطه میان
                  کاربران انجام می‌دهد.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://codeboursi.ir/blog/wp-content/uploads/2020/02/ethereum-gains-value-bitcoin-stabilizes-850x490-1-768x432.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  اتریوم
                </Typography>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  variant="body2"
                  color="text.secondary"
                >
                  ارز دیجیتال شبکه اتریوم، «اتر» (Ether) نام دارد و واحد اختصاری
                  آن ETH است. این دارایی به‌عنوان واحد پولی شبکه و همچنین راهی
                  برای پرداخت هزینه‌ها و کارمزدها در نظر گرفته می‌شود. بنابراین
                  هر چقدر که مقبولیت شبکه اتریوم افزایش پیدا کند، از نظر تئوری
                  ارزش اتر هم افزایش خواهد یافت.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://www.chetor.com/wp-content/uploads/2021/05/my-logo-2.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  دوج کوین
                </Typography>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  variant="body2"
                  color="text.secondary"
                >
                  دوج کوین (Dogecoin)؛ ارز دیجیتالی که برای شوخی ساخته شده بود؛
                  اما حالا با ارزش بازار چندده میلیارد دلاری، در رده‌های بالای
                  بازار ارزهای دیجیتال دیده می‌شود، افراد بزرگی مانند ایلان ماسک
                  از آن حمایت می‌کنند و برای بهبود آن برنامه‌ریزی کرده‌اند.
                  امروزه طرفدار زیادی پیدا کرده است.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://www.analyticsinsight.net/wp-content/uploads/2021/09/Tether.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  تتر
                </Typography>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  variant="body2"
                  color="text.secondary"
                >{" "}
                  تتر یک فلسفه‌ی ساده داره: به ازای هر یک تتری که به صورت
                  دیجیتال وجود داره، ما (کمپانی مالک تتر) یک دلار در بانک
                 
                 نگهداری می‌کنیم.به این ترتیب قیمت تتر همیشه ثابت می‌مونه.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://thumbs.dreamstime.com/b/coin-cryptocurrency-tron-golden-background-trx-gold-fabric-137613237.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  ترون
                </Typography>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  variant="body2"
                  color="text.secondary"
                >
                  ارز دیجیتال ترون با نشانه اختصاری TRX، ارز داخلی بلاک چین ترون
                  است. این ارز دیجیتال یک پلتفرم غیرمتمرکز مبتنی بر بلاک چین است
                  که هدف آن ایجاد یک شبکه جهانی اشتراک‌گذاری مطالب رایگان در
                  حوزه سرگرمی است.{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardStyle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://wallex.ir/blog/wp-content/uploads/2020/02/%D8%B1%D9%85%D8%B2%D8%A7%D8%B1%D8%B2-%D8%B1%DB%8C%D9%BE%D9%84-1.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  ریپل
                </Typography>
                <Typography
                  sx={{ fontFamily: "Iranian_Sans" }}
                  variant="body2"
                  color="text.secondary"
                >
                  این رمزارز در حال حاضر یک شبکه پرداخت جهانی است که پرداخت‌های
                  بین المللی فوری، دقیق و کم هزینه‌ای را ارائه می‌دهد. هدف ریپل
                  در درجه اول، کمک به هموار کردن این بخش با استفاده از تسهیل
                  پرداخت‌های جهانی بوده است.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
