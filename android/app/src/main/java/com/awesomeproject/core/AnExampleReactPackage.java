package com.awesomeproject.core;

import com.awesomeproject.utils.IntentUtil;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by Administrator on 2016/6/16.
 */
public class AnExampleReactPackage implements ReactPackage {

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
//        List<NativeModule> modules = new ArrayList<>();
//        modules.add(new IntentAndroid(reactContext));
//        return modules;

        return Arrays.<NativeModule>asList(new IntentUtil(reactContext));
    }
}