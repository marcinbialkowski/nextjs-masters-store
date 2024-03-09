import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'category',
            loc: { start: 22, end: 30 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 31, end: 35 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 37, end: 43 },
                  },
                  loc: { start: 37, end: 43 },
                },
                loc: { start: 37, end: 44 },
              },
              directives: [],
              loc: { start: 31, end: 44 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Category',
              loc: { start: 47, end: 55 },
            },
            loc: { start: 47, end: 55 },
          },
          directives: [],
          loc: { start: 22, end: 55 },
        },
      ],
      loc: { start: 0, end: 57 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Category', loc: { start: 64, end: 72 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 77, end: 79 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 81, end: 83 } },
              loc: { start: 81, end: 83 },
            },
            loc: { start: 81, end: 84 },
          },
          directives: [],
          loc: { start: 77, end: 84 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 87, end: 91 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 93, end: 99 },
              },
              loc: { start: 93, end: 99 },
            },
            loc: { start: 93, end: 100 },
          },
          directives: [],
          loc: { start: 87, end: 100 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 103, end: 107 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 109, end: 115 },
              },
              loc: { start: 109, end: 115 },
            },
            loc: { start: 109, end: 116 },
          },
          directives: [],
          loc: { start: 103, end: 116 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 119, end: 130 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 132, end: 138 },
              },
              loc: { start: 132, end: 138 },
            },
            loc: { start: 132, end: 139 },
          },
          directives: [],
          loc: { start: 119, end: 139 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 142, end: 150 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 151, end: 156 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 158, end: 161 },
                },
                loc: { start: 158, end: 161 },
              },
              directives: [],
              loc: { start: 151, end: 161 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 163, end: 167 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 169, end: 172 },
                },
                loc: { start: 169, end: 172 },
              },
              directives: [],
              loc: { start: 163, end: 172 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 175, end: 186 },
              },
              loc: { start: 175, end: 186 },
            },
            loc: { start: 175, end: 187 },
          },
          directives: [],
          loc: { start: 142, end: 187 },
        },
      ],
      loc: { start: 59, end: 189 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 202, end: 207 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'collection',
            loc: { start: 212, end: 222 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 223, end: 227 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 229, end: 235 },
                  },
                  loc: { start: 229, end: 235 },
                },
                loc: { start: 229, end: 236 },
              },
              directives: [],
              loc: { start: 223, end: 236 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Collection',
              loc: { start: 239, end: 249 },
            },
            loc: { start: 239, end: 249 },
          },
          directives: [],
          loc: { start: 212, end: 249 },
        },
      ],
      loc: { start: 190, end: 251 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Collection',
        loc: { start: 258, end: 268 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 273, end: 275 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 277, end: 279 },
              },
              loc: { start: 277, end: 279 },
            },
            loc: { start: 277, end: 280 },
          },
          directives: [],
          loc: { start: 273, end: 280 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 283, end: 287 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 289, end: 295 },
              },
              loc: { start: 289, end: 295 },
            },
            loc: { start: 289, end: 296 },
          },
          directives: [],
          loc: { start: 283, end: 296 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 299, end: 303 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 305, end: 311 },
              },
              loc: { start: 305, end: 311 },
            },
            loc: { start: 305, end: 312 },
          },
          directives: [],
          loc: { start: 299, end: 312 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 315, end: 326 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 328, end: 334 },
              },
              loc: { start: 328, end: 334 },
            },
            loc: { start: 328, end: 335 },
          },
          directives: [],
          loc: { start: 315, end: 335 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 338, end: 346 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 347, end: 352 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 354, end: 357 },
                },
                loc: { start: 354, end: 357 },
              },
              directives: [],
              loc: { start: 347, end: 357 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 359, end: 363 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 365, end: 368 },
                },
                loc: { start: 365, end: 368 },
              },
              directives: [],
              loc: { start: 359, end: 368 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 371, end: 382 },
              },
              loc: { start: 371, end: 382 },
            },
            loc: { start: 371, end: 383 },
          },
          directives: [],
          loc: { start: 338, end: 383 },
        },
      ],
      loc: { start: 253, end: 385 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Image', loc: { start: 391, end: 396 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 401, end: 403 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 405, end: 407 },
              },
              loc: { start: 405, end: 407 },
            },
            loc: { start: 405, end: 408 },
          },
          directives: [],
          loc: { start: 401, end: 408 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 411, end: 414 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 416, end: 422 },
              },
              loc: { start: 416, end: 422 },
            },
            loc: { start: 416, end: 423 },
          },
          directives: [],
          loc: { start: 411, end: 423 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'alt', loc: { start: 426, end: 429 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 431, end: 437 },
              },
              loc: { start: 431, end: 437 },
            },
            loc: { start: 431, end: 438 },
          },
          directives: [],
          loc: { start: 426, end: 438 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'width', loc: { start: 441, end: 446 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 448, end: 451 },
              },
              loc: { start: 448, end: 451 },
            },
            loc: { start: 448, end: 452 },
          },
          directives: [],
          loc: { start: 441, end: 452 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'height',
            loc: { start: 455, end: 461 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 463, end: 466 },
              },
              loc: { start: 463, end: 466 },
            },
            loc: { start: 463, end: 467 },
          },
          directives: [],
          loc: { start: 455, end: 467 },
        },
      ],
      loc: { start: 386, end: 469 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'ListMeta', loc: { start: 475, end: 483 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'count', loc: { start: 488, end: 493 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 495, end: 498 },
              },
              loc: { start: 495, end: 498 },
            },
            loc: { start: 495, end: 499 },
          },
          directives: [],
          loc: { start: 488, end: 499 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'total', loc: { start: 502, end: 507 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 509, end: 512 },
              },
              loc: { start: 509, end: 512 },
            },
            loc: { start: 509, end: 513 },
          },
          directives: [],
          loc: { start: 502, end: 513 },
        },
      ],
      loc: { start: 470, end: 515 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 528, end: 533 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'order', loc: { start: 538, end: 543 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 544, end: 546 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 548, end: 550 },
                  },
                  loc: { start: 548, end: 550 },
                },
                loc: { start: 548, end: 551 },
              },
              directives: [],
              loc: { start: 544, end: 551 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'status',
                loc: { start: 553, end: 559 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderStatus',
                  loc: { start: 561, end: 572 },
                },
                loc: { start: 561, end: 572 },
              },
              directives: [],
              loc: { start: 553, end: 572 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Order',
              loc: { start: 575, end: 580 },
            },
            loc: { start: 575, end: 580 },
          },
          directives: [],
          loc: { start: 538, end: 580 },
        },
      ],
      loc: { start: 516, end: 582 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 596, end: 604 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderCreate',
            loc: { start: 609, end: 620 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 622, end: 627 },
              },
              loc: { start: 622, end: 627 },
            },
            loc: { start: 622, end: 628 },
          },
          directives: [],
          loc: { start: 609, end: 628 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderAddItem',
            loc: { start: 631, end: 643 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderId',
                loc: { start: 644, end: 651 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 653, end: 655 },
                  },
                  loc: { start: 653, end: 655 },
                },
                loc: { start: 653, end: 656 },
              },
              directives: [],
              loc: { start: 644, end: 656 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 658, end: 667 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 669, end: 671 },
                  },
                  loc: { start: 669, end: 671 },
                },
                loc: { start: 669, end: 672 },
              },
              directives: [],
              loc: { start: 658, end: 672 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 675, end: 680 },
              },
              loc: { start: 675, end: 680 },
            },
            loc: { start: 675, end: 681 },
          },
          directives: [],
          loc: { start: 631, end: 681 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderRemoveItem',
            loc: { start: 684, end: 699 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderId',
                loc: { start: 700, end: 707 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 709, end: 711 },
                  },
                  loc: { start: 709, end: 711 },
                },
                loc: { start: 709, end: 712 },
              },
              directives: [],
              loc: { start: 700, end: 712 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 714, end: 723 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 725, end: 727 },
                  },
                  loc: { start: 725, end: 727 },
                },
                loc: { start: 725, end: 728 },
              },
              directives: [],
              loc: { start: 714, end: 728 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 731, end: 736 },
              },
              loc: { start: 731, end: 736 },
            },
            loc: { start: 731, end: 737 },
          },
          directives: [],
          loc: { start: 684, end: 737 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderChangeItemQuantity',
            loc: { start: 740, end: 763 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderId',
                loc: { start: 764, end: 771 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 773, end: 775 },
                  },
                  loc: { start: 773, end: 775 },
                },
                loc: { start: 773, end: 776 },
              },
              directives: [],
              loc: { start: 764, end: 776 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 778, end: 787 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 789, end: 791 },
                  },
                  loc: { start: 789, end: 791 },
                },
                loc: { start: 789, end: 792 },
              },
              directives: [],
              loc: { start: 778, end: 792 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'quantity',
                loc: { start: 794, end: 802 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: { start: 804, end: 807 },
                  },
                  loc: { start: 804, end: 807 },
                },
                loc: { start: 804, end: 808 },
              },
              directives: [],
              loc: { start: 794, end: 808 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 811, end: 816 },
              },
              loc: { start: 811, end: 816 },
            },
            loc: { start: 811, end: 817 },
          },
          directives: [],
          loc: { start: 740, end: 817 },
        },
      ],
      loc: { start: 584, end: 819 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'OrderStatus',
        loc: { start: 826, end: 837 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'CANCELLED',
            loc: { start: 842, end: 851 },
          },
          directives: [],
          loc: { start: 842, end: 851 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'CREATED',
            loc: { start: 854, end: 861 },
          },
          directives: [],
          loc: { start: 854, end: 861 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'FULFILLED',
            loc: { start: 864, end: 873 },
          },
          directives: [],
          loc: { start: 864, end: 873 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'PAID', loc: { start: 876, end: 880 } },
          directives: [],
          loc: { start: 876, end: 880 },
        },
      ],
      loc: { start: 821, end: 882 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'OrderItem', loc: { start: 889, end: 898 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 903, end: 905 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 907, end: 909 },
              },
              loc: { start: 907, end: 909 },
            },
            loc: { start: 907, end: 910 },
          },
          directives: [],
          loc: { start: 903, end: 910 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'quantity',
            loc: { start: 913, end: 921 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 923, end: 926 },
              },
              loc: { start: 923, end: 926 },
            },
            loc: { start: 923, end: 927 },
          },
          directives: [],
          loc: { start: 913, end: 927 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: { start: 930, end: 937 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Product',
                loc: { start: 939, end: 946 },
              },
              loc: { start: 939, end: 946 },
            },
            loc: { start: 939, end: 947 },
          },
          directives: [],
          loc: { start: 930, end: 947 },
        },
      ],
      loc: { start: 884, end: 949 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Order', loc: { start: 956, end: 961 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 966, end: 968 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 970, end: 972 },
              },
              loc: { start: 970, end: 972 },
            },
            loc: { start: 970, end: 973 },
          },
          directives: [],
          loc: { start: 966, end: 973 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'status',
            loc: { start: 976, end: 982 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'OrderStatus',
                loc: { start: 984, end: 995 },
              },
              loc: { start: 984, end: 995 },
            },
            loc: { start: 984, end: 996 },
          },
          directives: [],
          loc: { start: 976, end: 996 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'items',
            loc: { start: 999, end: 1004 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'OrderItem',
                    loc: { start: 1007, end: 1016 },
                  },
                  loc: { start: 1007, end: 1016 },
                },
                loc: { start: 1007, end: 1017 },
              },
              loc: { start: 1006, end: 1018 },
            },
            loc: { start: 1006, end: 1019 },
          },
          directives: [],
          loc: { start: 999, end: 1019 },
        },
      ],
      loc: { start: 951, end: 1021 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1034, end: 1039 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: { start: 1044, end: 1051 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 1052, end: 1056 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1058, end: 1064 },
                  },
                  loc: { start: 1058, end: 1064 },
                },
                loc: { start: 1058, end: 1065 },
              },
              directives: [],
              loc: { start: 1052, end: 1065 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Product',
              loc: { start: 1068, end: 1075 },
            },
            loc: { start: 1068, end: 1075 },
          },
          directives: [],
          loc: { start: 1044, end: 1075 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 1078, end: 1086 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 1087, end: 1092 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 1094, end: 1097 },
                },
                loc: { start: 1094, end: 1097 },
              },
              directives: [],
              loc: { start: 1087, end: 1097 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 1099, end: 1103 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 1105, end: 1108 },
                },
                loc: { start: 1105, end: 1108 },
              },
              directives: [],
              loc: { start: 1099, end: 1108 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'ids',
                loc: { start: 1110, end: 1113 },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'ID',
                      loc: { start: 1116, end: 1118 },
                    },
                    loc: { start: 1116, end: 1118 },
                  },
                  loc: { start: 1116, end: 1119 },
                },
                loc: { start: 1115, end: 1120 },
              },
              directives: [],
              loc: { start: 1110, end: 1120 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'search',
                loc: { start: 1122, end: 1128 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: { start: 1130, end: 1136 },
                },
                loc: { start: 1130, end: 1136 },
              },
              directives: [],
              loc: { start: 1122, end: 1136 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'sortBy',
                loc: { start: 1138, end: 1144 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductsSortBy',
                  loc: { start: 1146, end: 1160 },
                },
                loc: { start: 1146, end: 1160 },
              },
              directives: [],
              loc: { start: 1138, end: 1160 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'sortDirection',
                loc: { start: 1162, end: 1175 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductsSortDirection',
                  loc: { start: 1177, end: 1198 },
                },
                loc: { start: 1177, end: 1198 },
              },
              directives: [],
              loc: { start: 1162, end: 1198 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 1201, end: 1212 },
              },
              loc: { start: 1201, end: 1212 },
            },
            loc: { start: 1201, end: 1213 },
          },
          directives: [],
          loc: { start: 1078, end: 1213 },
        },
      ],
      loc: { start: 1022, end: 1215 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Product', loc: { start: 1222, end: 1229 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1234, end: 1236 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1238, end: 1240 },
              },
              loc: { start: 1238, end: 1240 },
            },
            loc: { start: 1238, end: 1241 },
          },
          directives: [],
          loc: { start: 1234, end: 1241 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'slug',
            loc: { start: 1244, end: 1248 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1250, end: 1256 },
              },
              loc: { start: 1250, end: 1256 },
            },
            loc: { start: 1250, end: 1257 },
          },
          directives: [],
          loc: { start: 1244, end: 1257 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1260, end: 1264 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1266, end: 1272 },
              },
              loc: { start: 1266, end: 1272 },
            },
            loc: { start: 1266, end: 1273 },
          },
          directives: [],
          loc: { start: 1260, end: 1273 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 1276, end: 1287 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1289, end: 1295 },
              },
              loc: { start: 1289, end: 1295 },
            },
            loc: { start: 1289, end: 1296 },
          },
          directives: [],
          loc: { start: 1276, end: 1296 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'price',
            loc: { start: 1299, end: 1304 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 1306, end: 1309 },
              },
              loc: { start: 1306, end: 1309 },
            },
            loc: { start: 1306, end: 1310 },
          },
          directives: [],
          loc: { start: 1299, end: 1310 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'rating',
            loc: { start: 1313, end: 1319 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Float',
              loc: { start: 1321, end: 1326 },
            },
            loc: { start: 1321, end: 1326 },
          },
          directives: [],
          loc: { start: 1313, end: 1326 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'images',
            loc: { start: 1329, end: 1335 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Image',
                    loc: { start: 1338, end: 1343 },
                  },
                  loc: { start: 1338, end: 1343 },
                },
                loc: { start: 1338, end: 1344 },
              },
              loc: { start: 1337, end: 1345 },
            },
            loc: { start: 1337, end: 1346 },
          },
          directives: [],
          loc: { start: 1329, end: 1346 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviews',
            loc: { start: 1349, end: 1356 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Review',
                    loc: { start: 1359, end: 1365 },
                  },
                  loc: { start: 1359, end: 1365 },
                },
                loc: { start: 1359, end: 1366 },
              },
              loc: { start: 1358, end: 1367 },
            },
            loc: { start: 1358, end: 1368 },
          },
          directives: [],
          loc: { start: 1349, end: 1368 },
        },
      ],
      loc: { start: 1217, end: 1370 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductList',
        loc: { start: 1377, end: 1388 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'data',
            loc: { start: 1393, end: 1397 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Product',
                    loc: { start: 1400, end: 1407 },
                  },
                  loc: { start: 1400, end: 1407 },
                },
                loc: { start: 1400, end: 1408 },
              },
              loc: { start: 1399, end: 1409 },
            },
            loc: { start: 1399, end: 1410 },
          },
          directives: [],
          loc: { start: 1393, end: 1410 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'meta',
            loc: { start: 1413, end: 1417 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ListMeta',
                loc: { start: 1419, end: 1427 },
              },
              loc: { start: 1419, end: 1427 },
            },
            loc: { start: 1419, end: 1428 },
          },
          directives: [],
          loc: { start: 1413, end: 1428 },
        },
      ],
      loc: { start: 1372, end: 1430 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductsSortBy',
        loc: { start: 1437, end: 1451 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'PRICE',
            loc: { start: 1456, end: 1461 },
          },
          directives: [],
          loc: { start: 1456, end: 1461 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'RATING',
            loc: { start: 1464, end: 1470 },
          },
          directives: [],
          loc: { start: 1464, end: 1470 },
        },
      ],
      loc: { start: 1432, end: 1472 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductsSortDirection',
        loc: { start: 1479, end: 1500 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'ASC', loc: { start: 1505, end: 1508 } },
          directives: [],
          loc: { start: 1505, end: 1508 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'DESC',
            loc: { start: 1511, end: 1515 },
          },
          directives: [],
          loc: { start: 1511, end: 1515 },
        },
      ],
      loc: { start: 1474, end: 1517 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1530, end: 1535 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviews',
            loc: { start: 1540, end: 1547 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 1548, end: 1557 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1559, end: 1561 },
                  },
                  loc: { start: 1559, end: 1561 },
                },
                loc: { start: 1559, end: 1562 },
              },
              directives: [],
              loc: { start: 1548, end: 1562 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Review',
                    loc: { start: 1566, end: 1572 },
                  },
                  loc: { start: 1566, end: 1572 },
                },
                loc: { start: 1566, end: 1573 },
              },
              loc: { start: 1565, end: 1574 },
            },
            loc: { start: 1565, end: 1575 },
          },
          directives: [],
          loc: { start: 1540, end: 1575 },
        },
      ],
      loc: { start: 1518, end: 1577 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1591, end: 1599 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviewCreate',
            loc: { start: 1604, end: 1616 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 1617, end: 1626 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1628, end: 1630 },
                  },
                  loc: { start: 1628, end: 1630 },
                },
                loc: { start: 1628, end: 1631 },
              },
              directives: [],
              loc: { start: 1617, end: 1631 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'author',
                loc: { start: 1633, end: 1639 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1641, end: 1647 },
                  },
                  loc: { start: 1641, end: 1647 },
                },
                loc: { start: 1641, end: 1648 },
              },
              directives: [],
              loc: { start: 1633, end: 1648 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'email',
                loc: { start: 1650, end: 1655 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1657, end: 1663 },
                  },
                  loc: { start: 1657, end: 1663 },
                },
                loc: { start: 1657, end: 1664 },
              },
              directives: [],
              loc: { start: 1650, end: 1664 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'title',
                loc: { start: 1666, end: 1671 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1673, end: 1679 },
                  },
                  loc: { start: 1673, end: 1679 },
                },
                loc: { start: 1673, end: 1680 },
              },
              directives: [],
              loc: { start: 1666, end: 1680 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'content',
                loc: { start: 1682, end: 1689 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1691, end: 1697 },
                  },
                  loc: { start: 1691, end: 1697 },
                },
                loc: { start: 1691, end: 1698 },
              },
              directives: [],
              loc: { start: 1682, end: 1698 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'rating',
                loc: { start: 1700, end: 1706 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: { start: 1708, end: 1711 },
                  },
                  loc: { start: 1708, end: 1711 },
                },
                loc: { start: 1708, end: 1712 },
              },
              directives: [],
              loc: { start: 1700, end: 1712 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Review',
                loc: { start: 1715, end: 1721 },
              },
              loc: { start: 1715, end: 1721 },
            },
            loc: { start: 1715, end: 1722 },
          },
          directives: [],
          loc: { start: 1604, end: 1722 },
        },
      ],
      loc: { start: 1579, end: 1724 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Review', loc: { start: 1731, end: 1737 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1742, end: 1744 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1746, end: 1748 },
              },
              loc: { start: 1746, end: 1748 },
            },
            loc: { start: 1746, end: 1749 },
          },
          directives: [],
          loc: { start: 1742, end: 1749 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'author',
            loc: { start: 1752, end: 1758 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1760, end: 1766 },
              },
              loc: { start: 1760, end: 1766 },
            },
            loc: { start: 1760, end: 1767 },
          },
          directives: [],
          loc: { start: 1752, end: 1767 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'title',
            loc: { start: 1770, end: 1775 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1777, end: 1783 },
              },
              loc: { start: 1777, end: 1783 },
            },
            loc: { start: 1777, end: 1784 },
          },
          directives: [],
          loc: { start: 1770, end: 1784 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 1787, end: 1794 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1796, end: 1802 },
              },
              loc: { start: 1796, end: 1802 },
            },
            loc: { start: 1796, end: 1803 },
          },
          directives: [],
          loc: { start: 1787, end: 1803 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'rating',
            loc: { start: 1806, end: 1812 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 1814, end: 1817 },
              },
              loc: { start: 1814, end: 1817 },
            },
            loc: { start: 1814, end: 1818 },
          },
          directives: [],
          loc: { start: 1806, end: 1818 },
        },
      ],
      loc: { start: 1726, end: 1820 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 1826, end: 1831 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1821, end: 1831 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1838, end: 1846 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1833, end: 1846 },
    },
  ],
  loc: { start: 0, end: 1847 },
} as unknown as DocumentNode;
