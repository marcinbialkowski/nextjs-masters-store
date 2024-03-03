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
                value: 'search',
                loc: { start: 1110, end: 1116 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: { start: 1118, end: 1124 },
                },
                loc: { start: 1118, end: 1124 },
              },
              directives: [],
              loc: { start: 1110, end: 1124 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'sortBy',
                loc: { start: 1126, end: 1132 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductsSortBy',
                  loc: { start: 1134, end: 1148 },
                },
                loc: { start: 1134, end: 1148 },
              },
              directives: [],
              loc: { start: 1126, end: 1148 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'sortDirection',
                loc: { start: 1150, end: 1163 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductsSortDirection',
                  loc: { start: 1165, end: 1186 },
                },
                loc: { start: 1165, end: 1186 },
              },
              directives: [],
              loc: { start: 1150, end: 1186 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 1189, end: 1200 },
              },
              loc: { start: 1189, end: 1200 },
            },
            loc: { start: 1189, end: 1201 },
          },
          directives: [],
          loc: { start: 1078, end: 1201 },
        },
      ],
      loc: { start: 1022, end: 1203 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Product', loc: { start: 1210, end: 1217 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1222, end: 1224 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1226, end: 1228 },
              },
              loc: { start: 1226, end: 1228 },
            },
            loc: { start: 1226, end: 1229 },
          },
          directives: [],
          loc: { start: 1222, end: 1229 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'slug',
            loc: { start: 1232, end: 1236 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1238, end: 1244 },
              },
              loc: { start: 1238, end: 1244 },
            },
            loc: { start: 1238, end: 1245 },
          },
          directives: [],
          loc: { start: 1232, end: 1245 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1248, end: 1252 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1254, end: 1260 },
              },
              loc: { start: 1254, end: 1260 },
            },
            loc: { start: 1254, end: 1261 },
          },
          directives: [],
          loc: { start: 1248, end: 1261 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 1264, end: 1275 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1277, end: 1283 },
              },
              loc: { start: 1277, end: 1283 },
            },
            loc: { start: 1277, end: 1284 },
          },
          directives: [],
          loc: { start: 1264, end: 1284 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'price',
            loc: { start: 1287, end: 1292 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 1294, end: 1297 },
              },
              loc: { start: 1294, end: 1297 },
            },
            loc: { start: 1294, end: 1298 },
          },
          directives: [],
          loc: { start: 1287, end: 1298 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'rating',
            loc: { start: 1301, end: 1307 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Float',
              loc: { start: 1309, end: 1314 },
            },
            loc: { start: 1309, end: 1314 },
          },
          directives: [],
          loc: { start: 1301, end: 1314 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'images',
            loc: { start: 1317, end: 1323 },
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
                    loc: { start: 1326, end: 1331 },
                  },
                  loc: { start: 1326, end: 1331 },
                },
                loc: { start: 1326, end: 1332 },
              },
              loc: { start: 1325, end: 1333 },
            },
            loc: { start: 1325, end: 1334 },
          },
          directives: [],
          loc: { start: 1317, end: 1334 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviews',
            loc: { start: 1337, end: 1344 },
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
                    loc: { start: 1347, end: 1353 },
                  },
                  loc: { start: 1347, end: 1353 },
                },
                loc: { start: 1347, end: 1354 },
              },
              loc: { start: 1346, end: 1355 },
            },
            loc: { start: 1346, end: 1356 },
          },
          directives: [],
          loc: { start: 1337, end: 1356 },
        },
      ],
      loc: { start: 1205, end: 1358 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductList',
        loc: { start: 1365, end: 1376 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'data',
            loc: { start: 1381, end: 1385 },
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
                    loc: { start: 1388, end: 1395 },
                  },
                  loc: { start: 1388, end: 1395 },
                },
                loc: { start: 1388, end: 1396 },
              },
              loc: { start: 1387, end: 1397 },
            },
            loc: { start: 1387, end: 1398 },
          },
          directives: [],
          loc: { start: 1381, end: 1398 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'meta',
            loc: { start: 1401, end: 1405 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ListMeta',
                loc: { start: 1407, end: 1415 },
              },
              loc: { start: 1407, end: 1415 },
            },
            loc: { start: 1407, end: 1416 },
          },
          directives: [],
          loc: { start: 1401, end: 1416 },
        },
      ],
      loc: { start: 1360, end: 1418 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductsSortBy',
        loc: { start: 1425, end: 1439 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'PRICE',
            loc: { start: 1444, end: 1449 },
          },
          directives: [],
          loc: { start: 1444, end: 1449 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'RATING',
            loc: { start: 1452, end: 1458 },
          },
          directives: [],
          loc: { start: 1452, end: 1458 },
        },
      ],
      loc: { start: 1420, end: 1460 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductsSortDirection',
        loc: { start: 1467, end: 1488 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'ASC', loc: { start: 1493, end: 1496 } },
          directives: [],
          loc: { start: 1493, end: 1496 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'DESC',
            loc: { start: 1499, end: 1503 },
          },
          directives: [],
          loc: { start: 1499, end: 1503 },
        },
      ],
      loc: { start: 1462, end: 1505 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1518, end: 1523 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviews',
            loc: { start: 1528, end: 1535 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 1536, end: 1545 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1547, end: 1549 },
                  },
                  loc: { start: 1547, end: 1549 },
                },
                loc: { start: 1547, end: 1550 },
              },
              directives: [],
              loc: { start: 1536, end: 1550 },
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
                    loc: { start: 1554, end: 1560 },
                  },
                  loc: { start: 1554, end: 1560 },
                },
                loc: { start: 1554, end: 1561 },
              },
              loc: { start: 1553, end: 1562 },
            },
            loc: { start: 1553, end: 1563 },
          },
          directives: [],
          loc: { start: 1528, end: 1563 },
        },
      ],
      loc: { start: 1506, end: 1565 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1579, end: 1587 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviewCreate',
            loc: { start: 1592, end: 1604 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 1605, end: 1614 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1616, end: 1618 },
                  },
                  loc: { start: 1616, end: 1618 },
                },
                loc: { start: 1616, end: 1619 },
              },
              directives: [],
              loc: { start: 1605, end: 1619 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'author',
                loc: { start: 1621, end: 1627 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1629, end: 1635 },
                  },
                  loc: { start: 1629, end: 1635 },
                },
                loc: { start: 1629, end: 1636 },
              },
              directives: [],
              loc: { start: 1621, end: 1636 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'email',
                loc: { start: 1638, end: 1643 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1645, end: 1651 },
                  },
                  loc: { start: 1645, end: 1651 },
                },
                loc: { start: 1645, end: 1652 },
              },
              directives: [],
              loc: { start: 1638, end: 1652 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'title',
                loc: { start: 1654, end: 1659 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1661, end: 1667 },
                  },
                  loc: { start: 1661, end: 1667 },
                },
                loc: { start: 1661, end: 1668 },
              },
              directives: [],
              loc: { start: 1654, end: 1668 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'content',
                loc: { start: 1670, end: 1677 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1679, end: 1685 },
                  },
                  loc: { start: 1679, end: 1685 },
                },
                loc: { start: 1679, end: 1686 },
              },
              directives: [],
              loc: { start: 1670, end: 1686 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'rating',
                loc: { start: 1688, end: 1694 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: { start: 1696, end: 1699 },
                  },
                  loc: { start: 1696, end: 1699 },
                },
                loc: { start: 1696, end: 1700 },
              },
              directives: [],
              loc: { start: 1688, end: 1700 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Review',
                loc: { start: 1703, end: 1709 },
              },
              loc: { start: 1703, end: 1709 },
            },
            loc: { start: 1703, end: 1710 },
          },
          directives: [],
          loc: { start: 1592, end: 1710 },
        },
      ],
      loc: { start: 1567, end: 1712 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Review', loc: { start: 1719, end: 1725 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1730, end: 1732 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1734, end: 1736 },
              },
              loc: { start: 1734, end: 1736 },
            },
            loc: { start: 1734, end: 1737 },
          },
          directives: [],
          loc: { start: 1730, end: 1737 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'author',
            loc: { start: 1740, end: 1746 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1748, end: 1754 },
              },
              loc: { start: 1748, end: 1754 },
            },
            loc: { start: 1748, end: 1755 },
          },
          directives: [],
          loc: { start: 1740, end: 1755 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'title',
            loc: { start: 1758, end: 1763 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1765, end: 1771 },
              },
              loc: { start: 1765, end: 1771 },
            },
            loc: { start: 1765, end: 1772 },
          },
          directives: [],
          loc: { start: 1758, end: 1772 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 1775, end: 1782 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1784, end: 1790 },
              },
              loc: { start: 1784, end: 1790 },
            },
            loc: { start: 1784, end: 1791 },
          },
          directives: [],
          loc: { start: 1775, end: 1791 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'rating',
            loc: { start: 1794, end: 1800 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 1802, end: 1805 },
              },
              loc: { start: 1802, end: 1805 },
            },
            loc: { start: 1802, end: 1806 },
          },
          directives: [],
          loc: { start: 1794, end: 1806 },
        },
      ],
      loc: { start: 1714, end: 1808 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 1814, end: 1819 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1809, end: 1819 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1826, end: 1834 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1821, end: 1834 },
    },
  ],
  loc: { start: 0, end: 1835 },
} as unknown as DocumentNode;
