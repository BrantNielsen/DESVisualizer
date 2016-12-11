var encryptionObject = {
    "key": new BitArray(64, '133457799bbcdff1'),
    "input": new BitArray(64, '0123456789abcdef'),
    "initialPermutation": new BitArray(64, 'cc00ccfff0aaf0aa'),
    "roundKeys": {
        "roundKeyParts": [
            {
                "preShiftC": new BitArray(28, 'f0ccaaf'),
                "preShiftD": new BitArray(28, '556678f'),
                "shiftedC": new BitArray(28, 'e19955f'),
                "shiftedD": new BitArray(28, 'aaccf1e'),
                "combinedCD": new BitArray(56, 'e19955faaccf1e'),
                "pc2C": new BitArray(24, '1b02ef'),
                "pc2D": new BitArray(24, 'fc7072'),
                "key": new BitArray(48, '1b02effc7072')
            },
            {
                "preShiftC": new BitArray(28, 'e19955f'),
                "preShiftD": new BitArray(28, 'aaccf1e'),
                "shiftedC": new BitArray(28, 'c332abf'),
                "shiftedD": new BitArray(28, '5599e3d'),
                "combinedCD": new BitArray(56, 'c332abf5599e3d'),
                "pc2C": new BitArray(24, '79aed9'),
                "pc2D": new BitArray(24, 'dbc9e5'),
                "key": new BitArray(48, '79aed9dbc9e5')
            },
            {
                "preShiftC": new BitArray(28, 'c332abf'),
                "preShiftD": new BitArray(28, '5599e3d'),
                "shiftedC": new BitArray(28, '0ccaaff'),
                "shiftedD": new BitArray(28, '56678f5'),
                "combinedCD": new BitArray(56, '0ccaaff56678f5'),
                "pc2C": new BitArray(24, '55fc8a'),
                "pc2D": new BitArray(24, '42cf99'),
                "key": new BitArray(48, '55fc8a42cf99')
            },
            {
                "preShiftC": new BitArray(28, '0ccaaff'),
                "preShiftD": new BitArray(28, '56678f5'),
                "shiftedC": new BitArray(28, '332abfc'),
                "shiftedD": new BitArray(28, '599e3d5'),
                "combinedCD": new BitArray(56, '332abfc599e3d5'),
                "pc2C": new BitArray(24, '72add6'),
                "pc2D": new BitArray(24, 'db351d'),
                "key": new BitArray(48, '72add6db351d')
            },
            {
                "preShiftC": new BitArray(28, '332abfc'),
                "preShiftD": new BitArray(28, '599e3d5'),
                "shiftedC": new BitArray(28, 'ccaaff0'),
                "shiftedD": new BitArray(28, '6678f55'),
                "combinedCD": new BitArray(56, 'ccaaff06678f55'),
                "pc2C": new BitArray(24, '7cec07'),
                "pc2D": new BitArray(24, 'eb53a8'),
                "key": new BitArray(48, '7cec07eb53a8')
            },
            {
                "preShiftC": new BitArray(28, 'ccaaff0'),
                "preShiftD": new BitArray(28, '6678f55'),
                "shiftedC": new BitArray(28, '32abfc3'),
                "shiftedD": new BitArray(28, '99e3d55'),
                "combinedCD": new BitArray(56, '32abfc399e3d55'),
                "pc2C": new BitArray(24, '63a53e'),
                "pc2D": new BitArray(24, '507b2f'),
                "key": new BitArray(48, '63a53e507b2f')
            },
            {
                "preShiftC": new BitArray(28, '32abfc3'),
                "preShiftD": new BitArray(28, '99e3d55'),
                "shiftedC": new BitArray(28, 'caaff0c'),
                "shiftedD": new BitArray(28, '678f556'),
                "combinedCD": new BitArray(56, 'caaff0c678f556'),
                "pc2C": new BitArray(24, 'ec84b7'),
                "pc2D": new BitArray(24, 'f618bc'),
                "key": new BitArray(48, 'ec84b7f618bc')
            },
            {
                "preShiftC": new BitArray(28, 'caaff0c'),
                "preShiftD": new BitArray(28, '678f556'),
                "shiftedC": new BitArray(28, '2abfc33'),
                "shiftedD": new BitArray(28, '9e3d559'),
                "combinedCD": new BitArray(56, '2abfc339e3d559'),
                "pc2C": new BitArray(24, 'f78a3a'),
                "pc2D": new BitArray(24, 'c13bfb'),
                "key": new BitArray(48, 'f78a3ac13bfb')
            },
            {
                "preShiftC": new BitArray(28, '2abfc33'),
                "preShiftD": new BitArray(28, '9e3d559'),
                "shiftedC": new BitArray(28, '557f866'),
                "shiftedD": new BitArray(28, '3c7aab3'),
                "combinedCD": new BitArray(56, '557f8663c7aab3'),
                "pc2C": new BitArray(24, 'e0dbeb'),
                "pc2D": new BitArray(24, 'ede781'),
                "key": new BitArray(48, 'e0dbebede781')
            },
            {
                "preShiftC": new BitArray(28, '557f866'),
                "preShiftD": new BitArray(28, '3c7aab3'),
                "shiftedC": new BitArray(28, '55fe199'),
                "shiftedD": new BitArray(28, 'f1eaacc'),
                "combinedCD": new BitArray(56, '55fe199f1eaacc'),
                "pc2C": new BitArray(24, 'b1f347'),
                "pc2D": new BitArray(24, 'ba464f'),
                "key": new BitArray(48, 'b1f347ba464f')
            },
            {
                "preShiftC": new BitArray(28, '55fe199'),
                "preShiftD": new BitArray(28, 'f1eaacc'),
                "shiftedC": new BitArray(28, '57f8665'),
                "shiftedD": new BitArray(28, 'c7aab33'),
                "combinedCD": new BitArray(56, '57f8665c7aab33'),
                "pc2C": new BitArray(24, '215fd3'),
                "pc2D": new BitArray(24, 'ded386'),
                "key": new BitArray(48, '215fd3ded386')
            },
            {
                "preShiftC": new BitArray(28, '57f8665'),
                "preShiftD": new BitArray(28, 'c7aab33'),
                "shiftedC": new BitArray(28, '5fe1995'),
                "shiftedD": new BitArray(28, '1eaaccf'),
                "combinedCD": new BitArray(56, '5fe19951eaaccf'),
                "pc2C": new BitArray(24, '7571f5'),
                "pc2D": new BitArray(24, '9467e9'),
                "key": new BitArray(48, '7571f59467e9')
            },
            {
                "preShiftC": new BitArray(28, '5fe1995'),
                "preShiftD": new BitArray(28, '1eaaccf'),
                "shiftedC": new BitArray(28, '7f86655'),
                "shiftedD": new BitArray(28, '7aab33c'),
                "combinedCD": new BitArray(56, '7f866557aab33c'),
                "pc2C": new BitArray(24, '97c5d1'),
                "pc2D": new BitArray(24, 'faba41'),
                "key": new BitArray(48, '97c5d1faba41')
            },
            {
                "preShiftC": new BitArray(28, '7f86655'),
                "preShiftD": new BitArray(28, '7aab33c'),
                "shiftedC": new BitArray(28, 'fe19955'),
                "shiftedD": new BitArray(28, 'eaaccf1'),
                "combinedCD": new BitArray(56, 'fe19955eaaccf1'),
                "pc2C": new BitArray(24, '5f43b7'),
                "pc2D": new BitArray(24, 'f2e73a'),
                "key": new BitArray(48, '5f43b7f2e73a')
            },
            {
                "preShiftC": new BitArray(28, 'fe19955'),
                "preShiftD": new BitArray(28, 'eaaccf1'),
                "shiftedC": new BitArray(28, 'f866557'),
                "shiftedD": new BitArray(28, 'aab33c7'),
                "combinedCD": new BitArray(56, 'f866557aab33c7'),
                "pc2C": new BitArray(24, 'bf918d'),
                "pc2D": new BitArray(24, '3d3f0a'),
                "key": new BitArray(48, 'bf918d3d3f0a')
            },
            {
                "preShiftC": new BitArray(28, 'f866557'),
                "preShiftD": new BitArray(28, 'aab33c7'),
                "shiftedC": new BitArray(28, 'f0ccaaf'),
                "shiftedD": new BitArray(28, '556678f'),
                "combinedCD": new BitArray(56, 'f0ccaaf556678f'),
                "pc2C": new BitArray(24, 'cb3d8b'),
                "pc2D": new BitArray(24, '0e17f5'),
                "key": new BitArray(48, 'cb3d8b0e17f5')
            }
        ],
        "initialKeyPermutations": {
            "c": new BitArray(28, 'f0ccaaf'),
            "d": new BitArray(28, '556678f')
        }
    },
    "rounds": [
        {
            "input": new BitArray(64, 'cc00ccfff0aaf0aa'),
            "leftInitial": new BitArray(32, 'cc00ccff'),
            "rightInitial": new BitArray(32, 'f0aaf0aa'),
            "manglerData": {
                "expandedData": new BitArray(48, '7a15557a1555'),
                "sBoxDataInputs": [
                    new BitArray(6, '1e'),
                    new BitArray(6, '21'),
                    new BitArray(6, '15'),
                    new BitArray(6, '15'),
                    new BitArray(6, '1e'),
                    new BitArray(6, '21'),
                    new BitArray(6, '15'),
                    new BitArray(6, '15')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '06'),
                    new BitArray(6, '30'),
                    new BitArray(6, '0b'),
                    new BitArray(6, '2f'),
                    new BitArray(6, '3f'),
                    new BitArray(6, '07'),
                    new BitArray(6, '01'),
                    new BitArray(6, '32')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '18'),
                    new BitArray(6, '11'),
                    new BitArray(6, '1e'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '21'),
                    new BitArray(6, '26'),
                    new BitArray(6, '14'),
                    new BitArray(6, '27')
                ],
                "rowColumnData": [
                    {
                        "row": 0,
                        "column": 12
                    },
                    {
                        "row": 1,
                        "column": 8
                    },
                    {
                        "row": 0,
                        "column": 15
                    },
                    {
                        "row": 2,
                        "column": 13
                    },
                    {
                        "row": 3,
                        "column": 0
                    },
                    {
                        "row": 2,
                        "column": 3
                    },
                    {
                        "row": 0,
                        "column": 10
                    },
                    {
                        "row": 3,
                        "column": 3
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '5'),
                    new BitArray(4, 'c'),
                    new BitArray(4, '8'),
                    new BitArray(4, '2'),
                    new BitArray(4, 'b'),
                    new BitArray(4, '5'),
                    new BitArray(4, '9'),
                    new BitArray(4, '7')
                ],
                "combinedOutputs": new BitArray(32, '5c82b597'),
                "finalOutput": new BitArray(32, '234aa9bb')
            },
            "rightFinal": new BitArray(32, 'ef4a6544'),
            "leftFinal": new BitArray(32, 'f0aaf0aa'),
            "finalOutput": new BitArray(64, 'f0aaf0aaef4a6544')
        },
        {
            "input": new BitArray(64, 'f0aaf0aaef4a6544'),
            "leftInitial": new BitArray(32, 'f0aaf0aa'),
            "rightInitial": new BitArray(32, 'ef4a6544'),
            "manglerData": {
                "expandedData": new BitArray(48, '75ea5430aa09'),
                "sBoxDataInputs": [
                    new BitArray(6, '1d'),
                    new BitArray(6, '1e'),
                    new BitArray(6, '29'),
                    new BitArray(6, '14'),
                    new BitArray(6, '0c'),
                    new BitArray(6, '0a'),
                    new BitArray(6, '28'),
                    new BitArray(6, '09')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '1e'),
                    new BitArray(6, '1a'),
                    new BitArray(6, '3b'),
                    new BitArray(6, '19'),
                    new BitArray(6, '36'),
                    new BitArray(6, '3c'),
                    new BitArray(6, '27'),
                    new BitArray(6, '25')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '03'),
                    new BitArray(6, '04'),
                    new BitArray(6, '12'),
                    new BitArray(6, '0d'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '36'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '2c')
                ],
                "rowColumnData": [
                    {
                        "row": 1,
                        "column": 1
                    },
                    {
                        "row": 0,
                        "column": 2
                    },
                    {
                        "row": 0,
                        "column": 9
                    },
                    {
                        "row": 1,
                        "column": 6
                    },
                    {
                        "row": 2,
                        "column": 13
                    },
                    {
                        "row": 2,
                        "column": 11
                    },
                    {
                        "row": 1,
                        "column": 7
                    },
                    {
                        "row": 2,
                        "column": 6
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, 'f'),
                    new BitArray(4, '8'),
                    new BitArray(4, 'd'),
                    new BitArray(4, '0'),
                    new BitArray(4, '3'),
                    new BitArray(4, 'a'),
                    new BitArray(4, 'a'),
                    new BitArray(4, 'e')
                ],
                "combinedOutputs": new BitArray(32, 'f8d03aae'),
                "finalOutput": new BitArray(32, '3cab87a3')
            },
            "rightFinal": new BitArray(32, 'cc017709'),
            "leftFinal": new BitArray(32, 'ef4a6544'),
            "finalOutput": new BitArray(64, 'ef4a6544cc017709')
        },
        {
            "input": new BitArray(64, 'ef4a6544cc017709'),
            "leftInitial": new BitArray(32, 'ef4a6544'),
            "rightInitial": new BitArray(32, 'cc017709'),
            "manglerData": {
                "expandedData": new BitArray(48, 'e58002bae853'),
                "sBoxDataInputs": [
                    new BitArray(6, '39'),
                    new BitArray(6, '18'),
                    new BitArray(6, '00'),
                    new BitArray(6, '02'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '21'),
                    new BitArray(6, '13')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '15'),
                    new BitArray(6, '1f'),
                    new BitArray(6, '32'),
                    new BitArray(6, '0a'),
                    new BitArray(6, '10'),
                    new BitArray(6, '2c'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '19')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '2c'),
                    new BitArray(6, '07'),
                    new BitArray(6, '32'),
                    new BitArray(6, '08'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '02'),
                    new BitArray(6, '1f'),
                    new BitArray(6, '0a')
                ],
                "rowColumnData": [
                    {
                        "row": 2,
                        "column": 6
                    },
                    {
                        "row": 1,
                        "column": 3
                    },
                    {
                        "row": 2,
                        "column": 9
                    },
                    {
                        "row": 0,
                        "column": 4
                    },
                    {
                        "row": 2,
                        "column": 15
                    },
                    {
                        "row": 0,
                        "column": 1
                    },
                    {
                        "row": 1,
                        "column": 15
                    },
                    {
                        "row": 0,
                        "column": 5
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '2'),
                    new BitArray(4, '7'),
                    new BitArray(4, '1'),
                    new BitArray(4, '0'),
                    new BitArray(4, 'e'),
                    new BitArray(4, '1'),
                    new BitArray(4, '6'),
                    new BitArray(4, 'f')
                ],
                "combinedOutputs": new BitArray(32, '2710e16f'),
                "finalOutput": new BitArray(32, '4d166eb0')
            },
            "rightFinal": new BitArray(32, 'a25c0bf4'),
            "leftFinal": new BitArray(32, 'cc017709'),
            "finalOutput": new BitArray(64, 'cc017709a25c0bf4')
        },
        {
            "input": new BitArray(64, 'cc017709a25c0bf4'),
            "leftInitial": new BitArray(32, 'cc017709'),
            "rightInitial": new BitArray(32, 'a25c0bf4'),
            "manglerData": {
                "expandedData": new BitArray(48, '5042f8057fa9'),
                "sBoxDataInputs": [
                    new BitArray(6, '14'),
                    new BitArray(6, '04'),
                    new BitArray(6, '0b'),
                    new BitArray(6, '38'),
                    new BitArray(6, '01'),
                    new BitArray(6, '17'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '29')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '1c'),
                    new BitArray(6, '2a'),
                    new BitArray(6, '37'),
                    new BitArray(6, '16'),
                    new BitArray(6, '36'),
                    new BitArray(6, '33'),
                    new BitArray(6, '14'),
                    new BitArray(6, '1d')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '08'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '3c'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '37'),
                    new BitArray(6, '24'),
                    new BitArray(6, '2a'),
                    new BitArray(6, '34')
                ],
                "rowColumnData": [
                    {
                        "row": 0,
                        "column": 4
                    },
                    {
                        "row": 2,
                        "column": 7
                    },
                    {
                        "row": 2,
                        "column": 14
                    },
                    {
                        "row": 2,
                        "column": 7
                    },
                    {
                        "row": 3,
                        "column": 11
                    },
                    {
                        "row": 2,
                        "column": 2
                    },
                    {
                        "row": 2,
                        "column": 5
                    },
                    {
                        "row": 2,
                        "column": 10
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '2'),
                    new BitArray(4, '1'),
                    new BitArray(4, 'e'),
                    new BitArray(4, 'd'),
                    new BitArray(4, '9'),
                    new BitArray(4, 'f'),
                    new BitArray(4, '3'),
                    new BitArray(4, 'a')
                ],
                "combinedOutputs": new BitArray(32, '21ed9f3a'),
                "finalOutput": new BitArray(32, 'bb23774c')
            },
            "rightFinal": new BitArray(32, '77220045'),
            "leftFinal": new BitArray(32, 'a25c0bf4'),
            "finalOutput": new BitArray(64, 'a25c0bf477220045')
        },
        {
            "input": new BitArray(64, 'a25c0bf477220045'),
            "leftInitial": new BitArray(32, 'a25c0bf4'),
            "rightInitial": new BitArray(32, '77220045'),
            "manglerData": {
                "expandedData": new BitArray(48, 'bae90400020a'),
                "sBoxDataInputs": [
                    new BitArray(6, '2e'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '24'),
                    new BitArray(6, '04'),
                    new BitArray(6, '00'),
                    new BitArray(6, '00'),
                    new BitArray(6, '08'),
                    new BitArray(6, '0a')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '1f'),
                    new BitArray(6, '0e'),
                    new BitArray(6, '30'),
                    new BitArray(6, '07'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '35'),
                    new BitArray(6, '0e'),
                    new BitArray(6, '28')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '31'),
                    new BitArray(6, '20'),
                    new BitArray(6, '14'),
                    new BitArray(6, '03'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '35'),
                    new BitArray(6, '06'),
                    new BitArray(6, '22')
                ],
                "rowColumnData": [
                    {
                        "row": 3,
                        "column": 8
                    },
                    {
                        "row": 2,
                        "column": 0
                    },
                    {
                        "row": 0,
                        "column": 10
                    },
                    {
                        "row": 1,
                        "column": 1
                    },
                    {
                        "row": 2,
                        "column": 13
                    },
                    {
                        "row": 3,
                        "column": 10
                    },
                    {
                        "row": 0,
                        "column": 3
                    },
                    {
                        "row": 2,
                        "column": 1
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '5'),
                    new BitArray(4, '0'),
                    new BitArray(4, 'c'),
                    new BitArray(4, '8'),
                    new BitArray(4, '3'),
                    new BitArray(4, '1'),
                    new BitArray(4, 'e'),
                    new BitArray(4, 'b')
                ],
                "combinedOutputs": new BitArray(32, '50c831eb'),
                "finalOutput": new BitArray(32, '2813adc3')
            },
            "rightFinal": new BitArray(32, '8a4fa637'),
            "leftFinal": new BitArray(32, '77220045'),
            "finalOutput": new BitArray(64, '772200458a4fa637')
        },
        {
            "input": new BitArray(64, '772200458a4fa637'),
            "leftInitial": new BitArray(32, '77220045'),
            "rightInitial": new BitArray(32, '8a4fa637'),
            "manglerData": {
                "expandedData": new BitArray(48, 'c5425fd0c1af'),
                "sBoxDataInputs": [
                    new BitArray(6, '31'),
                    new BitArray(6, '14'),
                    new BitArray(6, '09'),
                    new BitArray(6, '1f'),
                    new BitArray(6, '34'),
                    new BitArray(6, '0c'),
                    new BitArray(6, '06'),
                    new BitArray(6, '2f')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '18'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '14'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '14'),
                    new BitArray(6, '07'),
                    new BitArray(6, '2c'),
                    new BitArray(6, '2f')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '29'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '1d'),
                    new BitArray(6, '21'),
                    new BitArray(6, '20'),
                    new BitArray(6, '0b'),
                    new BitArray(6, '2a'),
                    new BitArray(6, '00')
                ],
                "rowColumnData": [
                    {
                        "row": 3,
                        "column": 4
                    },
                    {
                        "row": 2,
                        "column": 7
                    },
                    {
                        "row": 1,
                        "column": 14
                    },
                    {
                        "row": 3,
                        "column": 0
                    },
                    {
                        "row": 2,
                        "column": 0
                    },
                    {
                        "row": 1,
                        "column": 5
                    },
                    {
                        "row": 2,
                        "column": 5
                    },
                    {
                        "row": 0,
                        "column": 0
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '4'),
                    new BitArray(4, '1'),
                    new BitArray(4, 'f'),
                    new BitArray(4, '3'),
                    new BitArray(4, '4'),
                    new BitArray(4, 'c'),
                    new BitArray(4, '3'),
                    new BitArray(4, 'd')
                ],
                "combinedOutputs": new BitArray(32, '41f34c3d'),
                "finalOutput": new BitArray(32, '9e45cd2c')
            },
            "rightFinal": new BitArray(32, 'e967cd69'),
            "leftFinal": new BitArray(32, '8a4fa637'),
            "finalOutput": new BitArray(64, '8a4fa637e967cd69')
        },
        {
            "input": new BitArray(64, '8a4fa637e967cd69'),
            "leftInitial": new BitArray(32, '8a4fa637'),
            "rightInitial": new BitArray(32, 'e967cd69'),
            "manglerData": {
                "expandedData": new BitArray(48, 'f52b0fe5ab53'),
                "sBoxDataInputs": [
                    new BitArray(6, '3d'),
                    new BitArray(6, '12'),
                    new BitArray(6, '2c'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '39'),
                    new BitArray(6, '1a'),
                    new BitArray(6, '2d'),
                    new BitArray(6, '13')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '3b'),
                    new BitArray(6, '08'),
                    new BitArray(6, '12'),
                    new BitArray(6, '37'),
                    new BitArray(6, '3d'),
                    new BitArray(6, '21'),
                    new BitArray(6, '22'),
                    new BitArray(6, '3c')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '06'),
                    new BitArray(6, '1a'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '38'),
                    new BitArray(6, '04'),
                    new BitArray(6, '3b'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '2f')
                ],
                "rowColumnData": [
                    {
                        "row": 0,
                        "column": 3
                    },
                    {
                        "row": 0,
                        "column": 13
                    },
                    {
                        "row": 2,
                        "column": 15
                    },
                    {
                        "row": 2,
                        "column": 12
                    },
                    {
                        "row": 0,
                        "column": 2
                    },
                    {
                        "row": 3,
                        "column": 13
                    },
                    {
                        "row": 1,
                        "column": 7
                    },
                    {
                        "row": 3,
                        "column": 7
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '1'),
                    new BitArray(4, '0'),
                    new BitArray(4, '7'),
                    new BitArray(4, '5'),
                    new BitArray(4, '4'),
                    new BitArray(4, '0'),
                    new BitArray(4, 'a'),
                    new BitArray(4, 'd')
                ],
                "combinedOutputs": new BitArray(32, '107540ad'),
                "finalOutput": new BitArray(32, '8c051c27')
            },
            "rightFinal": new BitArray(32, '064aba10'),
            "leftFinal": new BitArray(32, 'e967cd69'),
            "finalOutput": new BitArray(64, 'e967cd69064aba10')
        },
        {
            "input": new BitArray(64, 'e967cd69064aba10'),
            "leftInitial": new BitArray(32, 'e967cd69'),
            "rightInitial": new BitArray(32, '064aba10'),
            "manglerData": {
                "expandedData": new BitArray(48, '00c2555f40a0'),
                "sBoxDataInputs": [
                    new BitArray(6, '00'),
                    new BitArray(6, '0c'),
                    new BitArray(6, '09'),
                    new BitArray(6, '15'),
                    new BitArray(6, '17'),
                    new BitArray(6, '34'),
                    new BitArray(6, '02'),
                    new BitArray(6, '20')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '3d'),
                    new BitArray(6, '38'),
                    new BitArray(6, '28'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '30'),
                    new BitArray(6, '13'),
                    new BitArray(6, '2f'),
                    new BitArray(6, '3b')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '3d'),
                    new BitArray(6, '34'),
                    new BitArray(6, '21'),
                    new BitArray(6, '2f'),
                    new BitArray(6, '27'),
                    new BitArray(6, '27'),
                    new BitArray(6, '2d'),
                    new BitArray(6, '1b')
                ],
                "rowColumnData": [
                    {
                        "row": 3,
                        "column": 14
                    },
                    {
                        "row": 2,
                        "column": 10
                    },
                    {
                        "row": 3,
                        "column": 0
                    },
                    {
                        "row": 3,
                        "column": 7
                    },
                    {
                        "row": 3,
                        "column": 3
                    },
                    {
                        "row": 3,
                        "column": 3
                    },
                    {
                        "row": 3,
                        "column": 6
                    },
                    {
                        "row": 1,
                        "column": 13
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '6'),
                    new BitArray(4, 'c'),
                    new BitArray(4, '1'),
                    new BitArray(4, '8'),
                    new BitArray(4, '7'),
                    new BitArray(4, 'c'),
                    new BitArray(4, 'a'),
                    new BitArray(4, 'e')
                ],
                "combinedOutputs": new BitArray(32, '6c187cae'),
                "finalOutput": new BitArray(32, '3c0e86f9')
            },
            "rightFinal": new BitArray(32, 'd5694b90'),
            "leftFinal": new BitArray(32, '064aba10'),
            "finalOutput": new BitArray(64, '064aba10d5694b90')
        },
        {
            "input": new BitArray(64, '064aba10d5694b90'),
            "leftInitial": new BitArray(32, '064aba10'),
            "rightInitial": new BitArray(32, 'd5694b90'),
            "manglerData": {
                "expandedData": new BitArray(48, '6aab52a57ca1'),
                "sBoxDataInputs": [
                    new BitArray(6, '1a'),
                    new BitArray(6, '2a'),
                    new BitArray(6, '2d'),
                    new BitArray(6, '12'),
                    new BitArray(6, '29'),
                    new BitArray(6, '17'),
                    new BitArray(6, '32'),
                    new BitArray(6, '21')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '38'),
                    new BitArray(6, '0d'),
                    new BitArray(6, '2f'),
                    new BitArray(6, '2b'),
                    new BitArray(6, '3b'),
                    new BitArray(6, '1e'),
                    new BitArray(6, '1e'),
                    new BitArray(6, '01')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '22'),
                    new BitArray(6, '27'),
                    new BitArray(6, '02'),
                    new BitArray(6, '39'),
                    new BitArray(6, '12'),
                    new BitArray(6, '09'),
                    new BitArray(6, '2c'),
                    new BitArray(6, '20')
                ],
                "rowColumnData": [
                    {
                        "row": 2,
                        "column": 1
                    },
                    {
                        "row": 3,
                        "column": 3
                    },
                    {
                        "row": 0,
                        "column": 1
                    },
                    {
                        "row": 3,
                        "column": 12
                    },
                    {
                        "row": 0,
                        "column": 9
                    },
                    {
                        "row": 1,
                        "column": 4
                    },
                    {
                        "row": 2,
                        "column": 6
                    },
                    {
                        "row": 2,
                        "column": 0
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '1'),
                    new BitArray(4, '1'),
                    new BitArray(4, '0'),
                    new BitArray(4, 'c'),
                    new BitArray(4, '5'),
                    new BitArray(4, '7'),
                    new BitArray(4, '7'),
                    new BitArray(4, '7')
                ],
                "combinedOutputs": new BitArray(32, '110c5777'),
                "finalOutput": new BitArray(32, '22367c6a')
            },
            "rightFinal": new BitArray(32, '247cc67a'),
            "leftFinal": new BitArray(32, 'd5694b90'),
            "finalOutput": new BitArray(64, 'd5694b90247cc67a')
        },
        {
            "input": new BitArray(64, 'd5694b90247cc67a'),
            "leftInitial": new BitArray(32, 'd5694b90'),
            "rightInitial": new BitArray(32, '247cc67a'),
            "manglerData": {
                "expandedData": new BitArray(48, '1083f960c3f4'),
                "sBoxDataInputs": [
                    new BitArray(6, '04'),
                    new BitArray(6, '08'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '39'),
                    new BitArray(6, '18'),
                    new BitArray(6, '0c'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '34')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '2c'),
                    new BitArray(6, '1f'),
                    new BitArray(6, '0d'),
                    new BitArray(6, '07'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '24'),
                    new BitArray(6, '19'),
                    new BitArray(6, '0f')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '28'),
                    new BitArray(6, '17'),
                    new BitArray(6, '02'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '36'),
                    new BitArray(6, '28'),
                    new BitArray(6, '16'),
                    new BitArray(6, '3b')
                ],
                "rowColumnData": [
                    {
                        "row": 2,
                        "column": 4
                    },
                    {
                        "row": 1,
                        "column": 11
                    },
                    {
                        "row": 0,
                        "column": 1
                    },
                    {
                        "row": 2,
                        "column": 15
                    },
                    {
                        "row": 2,
                        "column": 11
                    },
                    {
                        "row": 2,
                        "column": 4
                    },
                    {
                        "row": 0,
                        "column": 11
                    },
                    {
                        "row": 3,
                        "column": 13
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, 'd'),
                    new BitArray(4, 'a'),
                    new BitArray(4, '0'),
                    new BitArray(4, '4'),
                    new BitArray(4, '5'),
                    new BitArray(4, '2'),
                    new BitArray(4, '7'),
                    new BitArray(4, '5')
                ],
                "combinedOutputs": new BitArray(32, 'da045275'),
                "finalOutput": new BitArray(32, '62bc9c22')
            },
            "rightFinal": new BitArray(32, 'b7d5d7b2'),
            "leftFinal": new BitArray(32, '247cc67a'),
            "finalOutput": new BitArray(64, '247cc67ab7d5d7b2')
        },
        {
            "input": new BitArray(64, '247cc67ab7d5d7b2'),
            "leftInitial": new BitArray(32, '247cc67a'),
            "rightInitial": new BitArray(32, 'b7d5d7b2'),
            "manglerData": {
                "expandedData": new BitArray(48, '5afeabeafda5'),
                "sBoxDataInputs": [
                    new BitArray(6, '16'),
                    new BitArray(6, '2f'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '2b'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '2f'),
                    new BitArray(6, '36'),
                    new BitArray(6, '25')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '08'),
                    new BitArray(6, '15'),
                    new BitArray(6, '3f'),
                    new BitArray(6, '13'),
                    new BitArray(6, '37'),
                    new BitArray(6, '2d'),
                    new BitArray(6, '0e'),
                    new BitArray(6, '06')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '1e'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '05'),
                    new BitArray(6, '38'),
                    new BitArray(6, '0d'),
                    new BitArray(6, '02'),
                    new BitArray(6, '38'),
                    new BitArray(6, '23')
                ],
                "rowColumnData": [
                    {
                        "row": 0,
                        "column": 15
                    },
                    {
                        "row": 2,
                        "column": 13
                    },
                    {
                        "row": 1,
                        "column": 2
                    },
                    {
                        "row": 2,
                        "column": 12
                    },
                    {
                        "row": 1,
                        "column": 6
                    },
                    {
                        "row": 0,
                        "column": 1
                    },
                    {
                        "row": 2,
                        "column": 12
                    },
                    {
                        "row": 3,
                        "column": 1
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '7'),
                    new BitArray(4, '3'),
                    new BitArray(4, '0'),
                    new BitArray(4, '5'),
                    new BitArray(4, 'd'),
                    new BitArray(4, '1'),
                    new BitArray(4, '0'),
                    new BitArray(4, '1')
                ],
                "combinedOutputs": new BitArray(32, '7305d101'),
                "finalOutput": new BitArray(32, 'e104fa02')
            },
            "rightFinal": new BitArray(32, 'c5783c78'),
            "leftFinal": new BitArray(32, 'b7d5d7b2'),
            "finalOutput": new BitArray(64, 'b7d5d7b2c5783c78')
        },
        {
            "input": new BitArray(64, 'b7d5d7b2c5783c78'),
            "leftInitial": new BitArray(32, 'b7d5d7b2'),
            "rightInitial": new BitArray(32, 'c5783c78'),
            "manglerData": {
                "expandedData": new BitArray(48, '60abf01f83f1'),
                "sBoxDataInputs": [
                    new BitArray(6, '18'),
                    new BitArray(6, '0a'),
                    new BitArray(6, '2f'),
                    new BitArray(6, '30'),
                    new BitArray(6, '07'),
                    new BitArray(6, '38'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '31')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '1d'),
                    new BitArray(6, '17'),
                    new BitArray(6, '07'),
                    new BitArray(6, '35'),
                    new BitArray(6, '25'),
                    new BitArray(6, '06'),
                    new BitArray(6, '1f'),
                    new BitArray(6, '29')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '05'),
                    new BitArray(6, '1d'),
                    new BitArray(6, '28'),
                    new BitArray(6, '05'),
                    new BitArray(6, '22'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '10'),
                    new BitArray(6, '18')
                ],
                "rowColumnData": [
                    {
                        "row": 1,
                        "column": 2
                    },
                    {
                        "row": 1,
                        "column": 14
                    },
                    {
                        "row": 2,
                        "column": 4
                    },
                    {
                        "row": 1,
                        "column": 2
                    },
                    {
                        "row": 2,
                        "column": 1
                    },
                    {
                        "row": 2,
                        "column": 15
                    },
                    {
                        "row": 0,
                        "column": 8
                    },
                    {
                        "row": 0,
                        "column": 12
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '7'),
                    new BitArray(4, 'b'),
                    new BitArray(4, '8'),
                    new BitArray(4, 'b'),
                    new BitArray(4, '2'),
                    new BitArray(4, '6'),
                    new BitArray(4, '3'),
                    new BitArray(4, '5')
                ],
                "combinedOutputs": new BitArray(32, '7b8b2635'),
                "finalOutput": new BitArray(32, 'c268cfea')
            },
            "rightFinal": new BitArray(32, '75bd1858'),
            "leftFinal": new BitArray(32, 'c5783c78'),
            "finalOutput": new BitArray(64, 'c5783c7875bd1858')
        },
        {
            "input": new BitArray(64, 'c5783c7875bd1858'),
            "leftInitial": new BitArray(32, 'c5783c78'),
            "rightInitial": new BitArray(32, '75bd1858'),
            "manglerData": {
                "expandedData": new BitArray(48, '3abdfa8f02f0'),
                "sBoxDataInputs": [
                    new BitArray(6, '0e'),
                    new BitArray(6, '2b'),
                    new BitArray(6, '37'),
                    new BitArray(6, '3a'),
                    new BitArray(6, '23'),
                    new BitArray(6, '30'),
                    new BitArray(6, '0b'),
                    new BitArray(6, '30')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '25'),
                    new BitArray(6, '3c'),
                    new BitArray(6, '17'),
                    new BitArray(6, '11'),
                    new BitArray(6, '3e'),
                    new BitArray(6, '2b'),
                    new BitArray(6, '29'),
                    new BitArray(6, '01')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '2b'),
                    new BitArray(6, '17'),
                    new BitArray(6, '20'),
                    new BitArray(6, '2b'),
                    new BitArray(6, '1d'),
                    new BitArray(6, '1b'),
                    new BitArray(6, '22'),
                    new BitArray(6, '31')
                ],
                "rowColumnData": [
                    {
                        "row": 3,
                        "column": 5
                    },
                    {
                        "row": 1,
                        "column": 11
                    },
                    {
                        "row": 2,
                        "column": 0
                    },
                    {
                        "row": 3,
                        "column": 5
                    },
                    {
                        "row": 1,
                        "column": 14
                    },
                    {
                        "row": 1,
                        "column": 13
                    },
                    {
                        "row": 2,
                        "column": 1
                    },
                    {
                        "row": 3,
                        "column": 8
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '9'),
                    new BitArray(4, 'a'),
                    new BitArray(4, 'd'),
                    new BitArray(4, '1'),
                    new BitArray(4, '8'),
                    new BitArray(4, 'b'),
                    new BitArray(4, '4'),
                    new BitArray(4, 'f')
                ],
                "combinedOutputs": new BitArray(32, '9ad18b4f'),
                "finalOutput": new BitArray(32, 'ddbb2922')
            },
            "rightFinal": new BitArray(32, '18c3155a'),
            "leftFinal": new BitArray(32, '75bd1858'),
            "finalOutput": new BitArray(64, '75bd185818c3155a')
        },
        {
            "input": new BitArray(64, '75bd185818c3155a'),
            "leftInitial": new BitArray(32, '75bd1858'),
            "rightInitial": new BitArray(32, '18c3155a'),
            "manglerData": {
                "expandedData": new BitArray(48, '0f16068aaaf4'),
                "sBoxDataInputs": [
                    new BitArray(6, '03'),
                    new BitArray(6, '31'),
                    new BitArray(6, '18'),
                    new BitArray(6, '06'),
                    new BitArray(6, '22'),
                    new BitArray(6, '2a'),
                    new BitArray(6, '2b'),
                    new BitArray(6, '34')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '17'),
                    new BitArray(6, '34'),
                    new BitArray(6, '0e'),
                    new BitArray(6, '37'),
                    new BitArray(6, '3c'),
                    new BitArray(6, '2e'),
                    new BitArray(6, '1c'),
                    new BitArray(6, '3a')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '14'),
                    new BitArray(6, '05'),
                    new BitArray(6, '16'),
                    new BitArray(6, '31'),
                    new BitArray(6, '1e'),
                    new BitArray(6, '04'),
                    new BitArray(6, '37'),
                    new BitArray(6, '0e')
                ],
                "rowColumnData": [
                    {
                        "row": 0,
                        "column": 10
                    },
                    {
                        "row": 1,
                        "column": 2
                    },
                    {
                        "row": 0,
                        "column": 11
                    },
                    {
                        "row": 3,
                        "column": 8
                    },
                    {
                        "row": 0,
                        "column": 15
                    },
                    {
                        "row": 0,
                        "column": 2
                    },
                    {
                        "row": 3,
                        "column": 11
                    },
                    {
                        "row": 0,
                        "column": 7
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, '6'),
                    new BitArray(4, '4'),
                    new BitArray(4, '7'),
                    new BitArray(4, '9'),
                    new BitArray(4, '9'),
                    new BitArray(4, 'a'),
                    new BitArray(4, 'f'),
                    new BitArray(4, '1')
                ],
                "combinedOutputs": new BitArray(32, '64799af1'),
                "finalOutput": new BitArray(32, 'b7318e55')
            },
            "rightFinal": new BitArray(32, 'c28c960d'),
            "leftFinal": new BitArray(32, '18c3155a'),
            "finalOutput": new BitArray(64, '18c3155ac28c960d')
        },
        {
            "input": new BitArray(64, '18c3155ac28c960d'),
            "leftInitial": new BitArray(32, '18c3155a'),
            "rightInitial": new BitArray(32, 'c28c960d'),
            "manglerData": {
                "expandedData": new BitArray(48, 'e054594ac05b'),
                "sBoxDataInputs": [
                    new BitArray(6, '38'),
                    new BitArray(6, '05'),
                    new BitArray(6, '11'),
                    new BitArray(6, '19'),
                    new BitArray(6, '12'),
                    new BitArray(6, '2c'),
                    new BitArray(6, '01'),
                    new BitArray(6, '1b')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '2f'),
                    new BitArray(6, '39'),
                    new BitArray(6, '06'),
                    new BitArray(6, '0d'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '13'),
                    new BitArray(6, '3c'),
                    new BitArray(6, '0a')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '17'),
                    new BitArray(6, '3c'),
                    new BitArray(6, '17'),
                    new BitArray(6, '14'),
                    new BitArray(6, '1d'),
                    new BitArray(6, '3f'),
                    new BitArray(6, '3d'),
                    new BitArray(6, '11')
                ],
                "rowColumnData": [
                    {
                        "row": 1,
                        "column": 11
                    },
                    {
                        "row": 2,
                        "column": 14
                    },
                    {
                        "row": 1,
                        "column": 11
                    },
                    {
                        "row": 0,
                        "column": 10
                    },
                    {
                        "row": 1,
                        "column": 14
                    },
                    {
                        "row": 3,
                        "column": 15
                    },
                    {
                        "row": 3,
                        "column": 14
                    },
                    {
                        "row": 1,
                        "column": 8
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, 'b'),
                    new BitArray(4, '2'),
                    new BitArray(4, 'e'),
                    new BitArray(4, '8'),
                    new BitArray(4, '8'),
                    new BitArray(4, 'd'),
                    new BitArray(4, '3'),
                    new BitArray(4, 'c')
                ],
                "combinedOutputs": new BitArray(32, 'b2e88d3c'),
                "finalOutput": new BitArray(32, '5b81276e')
            },
            "rightFinal": new BitArray(32, '43423234'),
            "leftFinal": new BitArray(32, 'c28c960d'),
            "finalOutput": new BitArray(64, 'c28c960d43423234')
        },
        {
            "input": new BitArray(64, 'c28c960d43423234'),
            "leftInitial": new BitArray(32, 'c28c960d'),
            "rightInitial": new BitArray(32, '43423234'),
            "manglerData": {
                "expandedData": new BitArray(48, '206a041a41a8'),
                "sBoxDataInputs": [
                    new BitArray(6, '08'),
                    new BitArray(6, '06'),
                    new BitArray(6, '28'),
                    new BitArray(6, '04'),
                    new BitArray(6, '06'),
                    new BitArray(6, '24'),
                    new BitArray(6, '06'),
                    new BitArray(6, '28')
                ],
                "sBoxKeyInputs": [
                    new BitArray(6, '32'),
                    new BitArray(6, '33'),
                    new BitArray(6, '36'),
                    new BitArray(6, '0b'),
                    new BitArray(6, '03'),
                    new BitArray(6, '21'),
                    new BitArray(6, '1f'),
                    new BitArray(6, '35')
                ],
                "sBoxFinalInputs": [
                    new BitArray(6, '3a'),
                    new BitArray(6, '35'),
                    new BitArray(6, '1e'),
                    new BitArray(6, '0f'),
                    new BitArray(6, '05'),
                    new BitArray(6, '05'),
                    new BitArray(6, '19'),
                    new BitArray(6, '1d')
                ],
                "rowColumnData": [
                    {
                        "row": 2,
                        "column": 13
                    },
                    {
                        "row": 3,
                        "column": 10
                    },
                    {
                        "row": 0,
                        "column": 15
                    },
                    {
                        "row": 1,
                        "column": 7
                    },
                    {
                        "row": 1,
                        "column": 2
                    },
                    {
                        "row": 1,
                        "column": 2
                    },
                    {
                        "row": 1,
                        "column": 12
                    },
                    {
                        "row": 1,
                        "column": 14
                    }
                ],
                "sBoxOutputs": [
                    new BitArray(4, 'a'),
                    new BitArray(4, '7'),
                    new BitArray(4, '8'),
                    new BitArray(4, '3'),
                    new BitArray(4, '2'),
                    new BitArray(4, '4'),
                    new BitArray(4, '2'),
                    new BitArray(4, '9')
                ],
                "combinedOutputs": new BitArray(32, 'a7832429'),
                "finalOutput": new BitArray(32, 'c8c04f98')
            },
            "rightFinal": new BitArray(32, '0a4cd995'),
            "leftFinal": new BitArray(32, '43423234'),
            "finalOutput": new BitArray(64, '434232340a4cd995')
        }
    ],
    "finalRoundSwitch": new BitArray(64, '0a4cd99543423234'),
    "final": new BitArray(64, '85e813540f0ab405')
};