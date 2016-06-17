package com.awesomeproject.utils;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;

import com.awesomeproject.activitys.SplashActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.stetho.common.LogUtil;

public class IntentUtil extends ReactContextBaseJavaModule {
    private static String packageName = "com.cubic.autohome";

    public IntentUtil(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IntentUtil";
    }


    @ReactMethod
    public void intentTo() {
        LogUtil.i("IntentUtil","intentTo");
//        Toast.makeText(getReactApplicationContext(),"intentTo",Toast.LENGTH_LONG).show();
        Context mContext = getReactApplicationContext();
        Intent intent = new Intent(getReactApplicationContext(),SplashActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        mContext.startActivity(intent);
    }

    @ReactMethod
    public void opendActivityByUrl(String url) {
        LogUtil.i("uri:",url);
        Activity currentActivity = getCurrentActivity();
        Uri uri = Uri.parse(url).buildUpon().build();
        Intent intent = new Intent();
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.setData(uri);
        currentActivity.startActivity(intent);
    }

    @ReactMethod
    public void opendCarByUrl(String url) {
        LogUtil.i("uri:",url);
        Activity currentActivity = getCurrentActivity();
        Uri uri = Uri.parse(url).buildUpon().build();
        Intent intent = new Intent();
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.setData(uri);
        intent.setPackage(packageName);
        currentActivity.startActivity(intent);
    }



}
