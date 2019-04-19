import 'package:flutter/material.dart';
import 'package:labworks_mobile/src/widgets/LightBulb.dart';
import 'package:labworks_mobile/src/widgets/LightButton.dart';
import 'package:labworks_mobile/src/widgets/LightColorSelector.dart';

class ClassRoom extends StatefulWidget {
  @override
  _ClassRoomState createState() => _ClassRoomState();
}

class _ClassRoomState extends State<ClassRoom> {
  bool isLit = false;
  String lightColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blue,
      padding: EdgeInsets.all(5),
      child: Column(
        children: <Widget>[
          LightBulb(
            isLit: isLit,
            bulbColor: colorHelper(),
          ),
          LightButton(
            isLightOn: isLit,
            onButtonPressed: toggleLight,
          ),
          LightColorSelector(
            selectColorCallback: selectColor,
            initialColor: lightColor,
          ),
        ],
      ),
    );
  }

  void toggleLight() {
    setState(() {
      isLit = !isLit;
    });
  }

  void selectColor(String value) {
    setState(() {
      lightColor = value;
    });
  }

  Color colorHelper() {
    if (!isLit) {
      return Colors.red;
    } else if (lightColor == 'red') {
      return Colors.red;
    } else if (lightColor == 'blue') {
      return Colors.blue;
    } else {
      return Colors.green;
    }
  }
}
