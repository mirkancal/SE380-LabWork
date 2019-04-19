import 'package:flutter/material.dart';
import 'package:labworks_mobile/src/widgets/ClassRoom.dart';
import 'package:labworks_mobile/src/widgets/LightBulb.dart';
import 'package:labworks_mobile/src/widgets/LightButton.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'SE 380 Lab 2'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ClassRoom(),
          ],
        ),
      ),
    );
  }
}
