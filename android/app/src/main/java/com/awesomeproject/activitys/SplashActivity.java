package com.awesomeproject.activitys;

import android.app.Activity;
import android.os.Bundle;

import com.awesomeproject.R;

public class SplashActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_activity_layout);
    }
}
