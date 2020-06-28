import admob, {
  MaxAdContentRating,
  InterstitialAd,
  RewardedAd,
  TestIds,
  BannerAd,
  BannerAdSize,
} from "@react-native-firebase/admob";

//ad boiler plate for home page
useEffect(() => {
  admob()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: true,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: true,
    })
    .then(() => {
      // Request config successfully set!
    });
}, []);

<BannerAd
  unitId="ca-app-pub-8443845632043511/6200111189"
  size={BannerAdSize.FULL_BANNER}
  requestOptions={{
    requestNonPersonalizedAdsOnly: true,
  }}
/>;
